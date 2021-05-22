import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    
    <Home/>

  </React.StrictMode>,
/*=======
import AppState from './context/AppContext';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
>>>>>>> e7ead78abba92fe75501887b853bdff7a35c09e7*/
  document.getElementById('root')
);
