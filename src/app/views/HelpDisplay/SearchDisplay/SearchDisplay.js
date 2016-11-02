import React, { Component, PropTypes } from 'react';

import searchdisplayCSS from './searchDisplay.css';

import Topic from './Topic/Topic';

class SearchDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubtitles: false,
      searchResults: props.searchResults
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('SearchDisplay__componentWillReceiveProps');
    this.setState({
      searchResults: nextProps.searchResults
    });
    // debugger;
  }

  render() {
    return (
      <div className={ searchdisplayCSS['container'] }>
        { this.state.searchResults.map((result, i) => {
            return (
              <Topic searchTopic={ result } key={ i } />
            );
          })
        }
      </div>
    );
  }
}

SearchDisplay.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default SearchDisplay;
