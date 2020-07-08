import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.tsx';
import { Provider } from 'react-redux'
import Store from './redux/store/index'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);