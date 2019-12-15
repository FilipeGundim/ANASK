import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import loginReducer from './components/login/loginReducer'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux'

const reducers = combineReducers({
    login: loginReducer
})

ReactDOM.render(
    <Provider store = {createStore(reducers)} >
        <App />
    </Provider>
, 
document.getElementById('root'));