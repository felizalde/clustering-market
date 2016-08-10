import { applyMiddleware, createStore } from 'redux'
import allReducers from '../reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger());

export default  createStore(allReducers, middleware);
