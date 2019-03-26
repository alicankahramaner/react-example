import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';

import { reducers } from './reducer';

const reduxRouterMiddleware = routerMiddleware(createHashHistory());
const middleware = [thunk, reduxRouterMiddleware];

export const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware))
);