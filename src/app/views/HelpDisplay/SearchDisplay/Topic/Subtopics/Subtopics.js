import React, { Component, PropTypes } from 'react';

import subtopicsCSS from './subtopics.css';

class Subtopics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ subtopicsCSS['container'] }>
        <ul className={ subtopicsCSS['item-list'] }>
          { this.props.subtopics.map((subtopic, i) => {
              return(
                <li className={ subtopicsCSS['item']} key={ i }>
                  <a className={ subtopicsCSS['link'] }
                     href={ `#${subtopic.refId}` }>{ subtopic.title }
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Subtopics.propTypes = {
  subtopics: PropTypes.array
};

export default Subtopics;
