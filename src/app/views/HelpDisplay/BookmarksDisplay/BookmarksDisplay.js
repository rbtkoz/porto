import React, { Component, PropTypes } from 'react';

import bookmarksDisplayCSS from './bookmarksDisplay.css';
import Bookmark from './Bookmark/Bookmark';

let bookmarksStore = [{
  title:"bookmark1",
  description: "This is a great bookmark"
  },
  {
    title:"bookmark2",
    description: "This is a great bookmark"
  },
  {
    title:"bookmark3",
    description: "This is a great bookmark"
  },
  {
    title:"bookmark4",
    description: "This is a great bookmark"
  }];

let toggleIcon = {
  open: "ms-Icon ms-Icon--ChevronUp ",
  closed: "ms-Icon ms-Icon--ChevronDown "
};

let bookmarkIcon = 'ms-Icon ms-Icon--SingleBookmark';



class BookmarksDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookmarks: false,
      currentIcon: toggleIcon.closed
    };
  }

  handleToggle = () =>{
    if (this.state.showBookmarks){
      this.setState({showBookmarks:false, currentIcon:toggleIcon.closed})

    }else{
      this.setState({showBookmarks:true, currentIcon:toggleIcon.open})
    }
  }

  componentDidMount() {
    console.log('BookmarksDisplay componentDidMount');

  }

  render() {
    return (
      <div className={ bookmarksDisplayCSS['container']}>
        <div className={ bookmarksDisplayCSS['section']} onClick={this.handleToggle} >
          <div className={bookmarkIcon + ' ' + bookmarksDisplayCSS['bookmark-icon']}></div>
          <div className={ bookmarksDisplayCSS['title'] }>My Bookmarks</div>
          <i className={this.state.currentIcon + bookmarksDisplayCSS['chevron']}></i>
        </div>

        {this.state.showBookmarks &&
          <div className={ bookmarksDisplayCSS['bookmark-container'] +' '+'ms-u-slideDownIn10' }>
              <div>
                {bookmarksStore.map((bookmark, i) => {
                    return (
                    <Bookmark bookmarkCard={ bookmark } key={ i } />
                    );
                  })
                }
              </div>

          </div>
        }
      </div>
    );
  }

}

export default BookmarksDisplay;
