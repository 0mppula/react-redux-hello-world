import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import './index.css';
import App from './App';
const redux = require('redux');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
