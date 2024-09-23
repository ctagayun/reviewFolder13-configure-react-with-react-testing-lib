import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React Configured with Webpack and Babel. This is the output of App.js';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();