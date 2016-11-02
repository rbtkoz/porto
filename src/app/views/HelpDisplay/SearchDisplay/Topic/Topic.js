import React, { Component, PropTypes } from 'react';

import topicCSS from './topic.css';

import Subtopics from './Subtopics/Subtopics';

let toggleIcon = {
  open: "ms-Icon ms-Icon--ChevronUp ",
  closed: "ms-Icon ms-Icon--ChevronDown "
};

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: props.searchTopic.topic,
      references: props.searchTopic.references,
      toggle: false
    };
  }


  expandTopic = () => {
    const toggle = this.state.toggle;

    this.setState({
      toggle: !toggle
    });
  };

  render() {
    const searchTopic = this.props.searchTopic;
    let subtopics = this.state.toggle
      ? (<Subtopics subtopics={ searchTopic.references } />)
      : null;

    return (
      <div tabIndex="0" className={ topicCSS['card'] } onClick={ this.expandTopic }>
        <div className={ topicCSS['header'] }>
          <div className={topicCSS['count__container'] }>
            <div className={topicCSS['header__count'] }>{searchTopic.references.length}</div>
          </div>
          <div className={ topicCSS['header__title'] }>{ searchTopic.topic }</div>
          {this.state.toggle ?
            <i className={toggleIcon.open + topicCSS['chevron']}></i> : <i className={toggleIcon.closed + topicCSS['chevron']}></i>
          }
        </div>

        { subtopics }

      </div>
    );
  }
};

Topic.propTypes = {
  searchTopic: PropTypes.object.isRequired
};

export default Topic;
