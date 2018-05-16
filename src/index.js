import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={App} />
            </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();