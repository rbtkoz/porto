import React, { Component } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';
import searchInputCSS from '../SearchInput/searchinput.css';

import AutosuggestDisplay from './AutosuggestDisplay/AutosuggestDisplay';

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'cors',
  cache: 'default'
};

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      autosuggestResults: [],
      autosuggestStore: {},
      searchTextSelected: false,
      searchResults: []
    };

    console.log(this.props, "this props")

  }

  componentWillReceiveProps(nextProps) {
    console.log('SearchInput__componentWillReceiveProps');
    // debugger;
    this.setState({
      searchTextSelected: true,
      searchText: nextProps.searchText
    });
  }

  autosuggestHandler = (text) => {
    // debugger;
    if (this.state.searchTextSelected) {
      this.setState({
        searchTextSelected: false
      });
      return;
    }

    if (!text) {
      this.setState({
        searchText: '',
        autosuggestResults: []
      });

      return;
    }

    this.setState({
      searchText:text,
    });

    if (this.state.autosuggestStore[text]) {
      console.log('search text is cached!', this.state.autosuggestStore[text])
      this.setState({
        autosuggestResults: this.state.autosuggestStore[text]
      });

      return;
    }

    const that = this;
    const url = `https://127.0.0.1:8888/accounts/1234/search/autosuggest?q=${text}`;

    fetch(url, options)
      .then(response => {
        return response.json()
          .then(json => {
            const autosuggestResults = json.data;
            console.log('fetched: autosuggestResults:', autosuggestResults);

            // this.state.autosuggestStore[text] = autosuggestResults;

            that.setState({
              autosuggestStore: {
                [text]: autosuggestResults
              },
              autosuggestResults: autosuggestResults
            });
          })
      })
      .catch(err => {
        console.log('response error', err);
      });
  }

  completeSearchHandler = () => {
    console.log('SearchInput__completeSearchHandler');
    // debugger;
    const text = this.state.searchText;

    if (!text) {
      return;
    }

    const that = this;
    const url = `https://127.0.0.1:8888/accounts/1234/search/complete?q=${text}`;

    fetch(url, options)
      .then(function(response) {
        return response.json()
          .then(json => {
            const searchResults = json.data;
            console.log('fetched searchResults', searchResults);
            that.props.updateSearchResults(that.state.searchText, searchResults);

            that.setState({
              searchTextSelected: false,
              autosuggestResults: [],
              hasSearchResults: true
            });

            // debugger;
        })
      .catch(function(err) {
        console.log('SearchInput__completeSearchHandler error:', err);
      });
    });
  }

  updateTextField = (e) => {
    console.log('AutosuggestDisplay term selected');
    // debugger;
    this.setState({
      searchTextSelected: true,
      searchText: e.target.textContent,
      autosuggestResults: []
    });
    this.completeSearchHandler();

    // this.completeSearchHandler();
  }

  _handleKeyPress = (e) =>{
    if(e.key ==='Enter'){
      this.completeSearchHandler();
    }
  }

  handleAutoSuggest = () => {
    this.setState({
      autosuggestResults:[]
    });
  }

  clearState = () => {
    this.setState({
      searchText: '',
      autosuggestResults: [],
      searchResults: [],
      searchTextSelected: false,
      hasSearchResults: false
    });

    this.props.updateSearchResults('', []);
  }

  render() {
    let autosuggestDisplay;
    let backButton;

    if (this.state.autosuggestResults.length !== 0) {
      autosuggestDisplay = (
        <AutosuggestDisplay
          autosuggestResults={ this.state.autosuggestResults }
          updateTextField={ this.updateTextField }
        />
      );
    }

    if (this.state.hasSearchResults) {
      backButton = (
        <span className={ searchInputCSS['back-button'] }>
          <a href={null} onClick ={ this.clearState }>
            <i className={ searchInputCSS['ms-Icon'] + ' ' + searchInputCSS['ms-Icon--Back'] + ' ' + searchInputCSS['ms-u-slideRightIn10'] + ' ' + searchInputCSS.backicon }></i>
          </a>
        </span>
      );
    } else {
      backButton = null;
    }

    return (
      <div className={ searchInputCSS['container']} onClick={this.handleAutoSuggest} >
        <div className={ searchInputCSS['input']}>
          { backButton }
          <TextField className={ searchInputCSS['search-textfield'] }
            placeholder="comma"
            ariaLabel="Enter search text"
            value={ this.state.searchText }
            onChanged={ this.autosuggestHandler }
            onKeyPress={ this._handleKeyPress }
            />

          <Button type="submit" onSubmit={ this.completeSearchHandler } className={ searchInputCSS['complete-search-button'] }>
            <div className={ searchInputCSS['search-icon'] + ' ' + 'ms-Icon ms-Icon--Search' } />
          </Button>
      </div>
      { autosuggestDisplay }
      </div>
    );
  }
}

export default SearchInput;
