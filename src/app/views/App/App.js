import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Line from '../Line/Line';
import '../../styles/normalizer.css';
import resets from '../../styles/resets.css';

import alexpic from '../../assets/alex.jpg';
const App = () => {
  return (
      <div className={resets['alex-port-app']}>
        <Name />
        <Line />
        <Email />
      </div>
  );
};

export default App;
