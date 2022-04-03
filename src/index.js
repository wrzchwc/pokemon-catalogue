import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import thunk from 'redux-thunk';
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);