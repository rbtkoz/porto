import React, { Component, PropTypes } from 'react';

import supportCSS from './support.css';

class Support extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props")
    this.state = {
      support: props.supportCard,
    };
  }


  render() {

    return(
      <div className={ supportCSS['card'] }>
      <div className={ supportCSS['title'] } >{this.state.support.title}
  <div className={ supportCSS['subtitle'] }>{this.state.support.description}</div>
    </div>
      </div>
  );
  }
};

Support.propTypes = {
  supportCard: PropTypes.object.isRequired
};

export default Support;
