import React, { PropTypes } from 'react';

import helpDisplayCSS from './helpDisplay.css';

import TrendingDisplay from './TrendingDisplay/TrendingDisplay';
import SearchDisplay from './SearchDisplay/SearchDisplay';
import BookmarksDisplay from './BookmarksDisplay/BookmarksDisplay';
import SupportDisplay from './SupportDisplay/SupportDisplay';


const HelpDisplay = ({ updateSearchText, searchResults }) => {
  let display;

  if ( searchResults.length !== 0) {
    console.log('HelpDisplay:searchResults:', searchResults);
    display = (<SearchDisplay searchResults={ searchResults } />);
  } else {
    display = (
      <div>
        <BookmarksDisplay />
        <TrendingDisplay updateSearchText={ updateSearchText } />
        <SupportDisplay />
      </div>
  );

  }

  return (
    <div className={ helpDisplayCSS['container'] }>
      { display }
    </div>
  );
};

HelpDisplay.propTypes = {
  updateSearchText: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default HelpDisplay;
