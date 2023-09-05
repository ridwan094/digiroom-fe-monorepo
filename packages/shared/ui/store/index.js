import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

// Reducera
import example from './example/reducer';
import page from './page/reducer';

const rootReducer = {
  example,
  page
};

const reducer = combineReducers(rootReducer);
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
