import React, { Component, PropTypes } from 'react';

import bookmarkCSS from './bookmark.css';

class Bookmark extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props")
    this.state = {
      bookmarks: props.bookmarkCard,
    };
  }


  render() {

    return(
      <div className={ bookmarkCSS['card'] }>
          <div className={ bookmarkCSS['title'] } >{this.state.bookmarks.title}
            <div className={ bookmarkCSS['subtitle'] }>{this.state.bookmarks.description}</div>
          </div>
    <i className={ bookmarkCSS['delete-icon'] + ' ' + 'ms-Icon ms-Icon--Cancel' } aria-hidden="true"></i>
      </div>
    );
  }
};

Bookmark.propTypes = {
  bookmarkCard: PropTypes.object.isRequired
};

export default Bookmark;
