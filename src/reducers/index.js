import { combineReducers } from 'redux'
import SalesReducer from './sales-reducer'

const allReducers = combineReducers({
    sales : SalesReducer
});

export default allReducers;
