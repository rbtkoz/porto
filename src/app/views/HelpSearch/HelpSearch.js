import React, { Component }from 'react';
import helpSearchCSS from '../HelpSearch/helpSearch.css';

import SearchInput from '../SearchInput/SearchInput';
import HelpDisplay from '../HelpDisplay/HelpDisplay';

class HelpSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchResults: []
    };

  }

  updateSearchText = (e) => {
    console.log('HelpSearch:updateSearchText');
    this.setState({
      searchText: e.target.textContent
    });
  }

  updateSearchResults = (searchText, searchResults) => {
    console.log('HelpSearch:updateSearchResults', this.state);
    // debugger;
    this.setState({
      searchText: searchText,
      searchResults: searchResults
    });
  }

  render() {
    return (
      <div className= { helpSearchCSS['help-search-display-container'] }>
        <SearchInput updateSearchResults={ this.updateSearchResults } searchText={ this.state.searchText } />
        <HelpDisplay updateSearchText={ this.updateSearchText } searchResults={ this.state.searchResults } />
      </div>
    );
  }
};

export default HelpSearch;
