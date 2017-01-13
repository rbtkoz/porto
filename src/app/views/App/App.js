import React from 'react';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Line from '../Line/Line';
import Cards from '../Card/Cards';
import Section from '../Section/Section';
import Greeting from '../Greeting/Greeting';
import '../../styles/normalizer.css';
import resets from '../../styles/resets.css';
import alexpic from '../../assets/alex.jpg';
import Rebase from 're-base';

const config = {
  apiKey: "AIzaSyCmiLZF1o6PD_rmOJol27ola_pIyiFGZj4",
  authDomain: "porto-4cb55.firebaseapp.com",
  databaseURL: "https://porto-4cb55.firebaseio.com",
  storageBucket: "porto-4cb55.appspot.com",
  messagingSenderId: "385826194697"
};




const App = () => {
  return (
      <div className={resets['alex-port-app']}>
          <Name />
          <Email />
          <Line />
          <Greeting />
          <Section title="Design" color="red"/>
          <Section title="Code" color="blue"/>
          <Section title="Make" color="green"/>
        <Section title="Design" color="red"/>
        <Section title="Code" color="blue"/>
        <Section title="Make" color="green"/>
      </div>
  );
};

export default App;
