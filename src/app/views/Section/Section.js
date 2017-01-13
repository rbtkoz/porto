/**
 * Created by alex.kozovski on 1/13/17.
 */
import React from 'react';
import sectionCSS from '../Section/section.css';


var Section = React.createClass({


  render: function() {

    var color =this.props.color;
    console.log(color);

    return(
      <div className ={sectionCSS.container}>
      <div className={sectionCSS[color]}>

          <div className ={sectionCSS.verticaltext}>{this.props.title}</div>
        </div>
        </div>
    );
  }
});

export default Section;
