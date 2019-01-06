import { combineReducers } from 'redux';

// Reducers
import { helloReducers } from './Hello/reducer';

const _reducers:any = {
    ...helloReducers
};

export const reducers = combineReducers(_reducers)