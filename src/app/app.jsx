import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import reducer from './reducers';

import Root from './components/Root';

const logger = createLogger();

const middleware = [thunk, logger];
const rootElem = document.getElementById('root');

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
    <Root store={store} />,
    rootElem,
);
