import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Name from '/Name';



const App = () => {


  return (
    <MuiThemeProvider>
      <div className="alex-port-app">
        <RaisedButton label="Default" />
      <h2>Alex Kozovski</h2>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
