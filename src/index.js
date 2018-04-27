import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import './styles/index.css';

import { createStore } from 'redux';
import todoApp from './reducers/reducer';

const store = createStore(todoApp);

/**
 * Renderize the application main element
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
