import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import resume from './resume'
import {persistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persistor = persistStore(resume);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={resume}>
      <persistGate persistor={persistor}>
        <App /> 
      </persistGate>
    </Provider>
  </React.StrictMode>
);

