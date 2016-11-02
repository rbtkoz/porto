import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './views/App/App';
import './styles/normalizer.css';
import './styles/resets.css';



render (
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root-entry')
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./views/App/App', () => {
    //If we receive a HMR request for our App container, then
    //reload it using require (we can't do this dynamically with import)
    const NextApp = require('./views/App/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root-entry')
    );
  });
}
