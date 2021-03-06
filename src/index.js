import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk'

const store=createStore(reducers, applyMiddleware(thunk))
const wrapApp=<Provider store={store}>
    <App />
</Provider>

ReactDOM.render(wrapApp, document.getElementById('root'));


