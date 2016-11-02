import React from 'react';
import emailCSS from '../Email/email.css';

const Email = () => (
  <div className={emailCSS.container}>
  <div className ={emailCSS.myemail}>
    <a href="mailto:kozovski.a@gmail.com?Subject=Hello%20again" target="_top">EMAIL</a>
  </div>
    <div className ={emailCSS.myemail}>
      <a href="http://www.github.com/rbtkoz">GITHUB</a>
    </div>
    <div className ={emailCSS.myemail}>
      <a href="http://www.linkedin.com/in/kozovski">LINKEDIN</a>
    </div>
    </div>
);


export default Email;
