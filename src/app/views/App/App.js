import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Name from '../Name/Name';
import Email from '../Email/Email';
import Line from '../Line/Line';

import alexpic from '../../assets/alex.jpg';
const App = () => {
  return (
    <MuiThemeProvider>
      <div className="alex-port-app">
        <Name />
        <Line />
        <Email />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
