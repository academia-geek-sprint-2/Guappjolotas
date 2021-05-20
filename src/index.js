import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './context/AppContext';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
