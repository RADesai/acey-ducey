import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;