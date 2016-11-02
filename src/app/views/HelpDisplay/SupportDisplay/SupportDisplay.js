import React, { Component, PropTypes } from 'react';

import supportDisplayCSS from './supportDisplay.css';
import Support from './Support/Support';

let supportStore = [{
  title:"Help me do X",
  description: "Help detail of how user can complete action..."
  },
  {
    title:"Help me do Y",
    description: "Help detail of how user can complete action..."
  },
  {
    title:"Help me do Z",
    description: "Help detail of how user can complete action..."
  }];

let toggleIcon = {
  open: "ms-Icon ms-Icon--ChevronUp ",
  closed: "ms-Icon ms-Icon--ChevronDown "
};

let supportIcon = 'ms-Icon ms-Icon--Help';

class SupportDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSupport: false,
      currentIcon: toggleIcon.closed
    };
  }

  handleToggle = () =>{
    if (this.state.showSupport){
      this.setState({showSupport:false, currentIcon:toggleIcon.closed})

    }else{
      this.setState({showSupport:true, currentIcon:toggleIcon.open})
    }
  }

  componentDidMount() {
    console.log('SupportDisplay componentDidMount');

  }

  render() {
    return (
      <div className={ supportDisplayCSS['container'] }>
        <div className={ supportDisplayCSS['section'] } onClick={this.handleToggle} >
        <div className={supportIcon + ' ' + supportDisplayCSS['support-icon']}></div>
        <div className={ supportDisplayCSS['title'] }>Help</div>
          <i className={this.state.currentIcon + supportDisplayCSS['chevron']}></i>
        </div>

        {this.state.showSupport &&
          <div className={ supportDisplayCSS['support-container']+' '+'ms-u-slideDownIn10' }>
            {supportStore.map((item, i) => {
              return (
              <Support supportCard={ item } key={ i } />
              );
            })
            }
          </div>
        }
      </div>
    );
  }
}

export default SupportDisplay;
