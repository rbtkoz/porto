import React, { Component, PropTypes } from 'react';
import 'whatwg-fetch';

import trendingDisplayCSS from './trendingDisplay.css';

let trendingStore = [];
let toggleIcon = {
  open: "ms-Icon ms-Icon--ChevronUp ",
  closed: "ms-Icon ms-Icon--ChevronDown "
};

let trendingIcon = 'ms-Icon ms-Icon--Market';


class TrendingDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingResults: [],
      showTrending: false,
      currentIcon: toggleIcon.closed,
      loading: true

    };
  }

  handleToggle = () =>{
    if (this.state.showTrending){
      this.setState({showTrending:false, currentIcon:toggleIcon.closed})

    }else{
      this.setState({showTrending:true, currentIcon:toggleIcon.open})
    }
  }



  componentDidMount() {
    console.log('TrendingDisplay componentDidMount');

    if (trendingStore.length !== 0) {
      console.log('TrendingDisplay__componentDidMount--cached!');
      this.setState({
        trendingResults: trendingStore,
        loading: false


      });

      return;
    }

    const that = this;
    const url = 'https://localhost:8888/accounts/1234/search/trending';
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(url, options)
      .then(response => {
        return response.json()
          .then(json => {
            const trendingResults = json.data;
            console.log('fetched trendingResults:', trendingResults);

            trendingStore = trendingResults;
            that.setState({
              trendingResults,
              showTrending: true,
              currentIcon: toggleIcon.open,
              loading:false


            });
          });
      })
      .catch(err => {
        console.log('fetching trendingResults error:', err);
      });
  }

  render() {
    return (
      <div className={ trendingDisplayCSS['container']}>
        <div className={ trendingDisplayCSS['section']}
              onClick={this.handleToggle} >
          <div className={trendingIcon + ' ' + trendingDisplayCSS['trending-icon']}></div>
          <div className={ trendingDisplayCSS['title'] }>Trending Searches</div>
          <i className={this.state.currentIcon + trendingDisplayCSS['chevron']}></i>
        </div>

      {this.state.showTrending &&

        <div className={ trendingDisplayCSS['list-items']}>
    {this.state.loading ? <div className= {trendingDisplayCSS['loading-items']}>Loading...</div>: null}

  <ul>
              { this.state.trendingResults.map((data, i) => {
                  return (
                    <li className={ trendingDisplayCSS['item'] + ' ' + 'ms-u-slideDownIn10	' } key={i}
                        onClick={ this.props.updateSearchText }>{ data }
                    </li>
                  );
                })
              }
          </ul>
        </div>
      }
      </div>
    );
  }
}

TrendingDisplay.propTypes = {
  updateSearchText: PropTypes.func.isRequired
};

export default TrendingDisplay;
