import React from 'react';
import greetingCSS from '../Greeting/greeting.css';

const Greeting = () => (
  <div className={greetingCSS.container}>
    <div className ={greetingCSS.greeting}>
      Hi my name is Alex. I am a UX designer and developer based in NYC.
    </div>
  </div>
);


export default Greeting;
