import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppState from './context/AppContext';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
  <AppState>
    <App />
  </AppState>
  </ChakraProvider>,
  document.getElementById('root')
);
