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

        <iframe src="https://docs.google.com/presentation/d/155IpbgTMtmuXnYdBdsnKYYdNJbc1TR3SxMbgI4789S8/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1440" height="1109" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

      </div>
  );
};

export default App;
