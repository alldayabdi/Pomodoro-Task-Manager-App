import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

import SettingsContextProvider from './components/Pomodoro Clock/SettingsContext'

ReactDOM.render(
  <SettingsContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </SettingsContextProvider>,
  document.getElementById('react-root'),
);
