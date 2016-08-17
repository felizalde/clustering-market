import { combineReducers } from 'redux'

import sales from './sales-reducer'
import slr from './slr-reducer'

export default combineReducers({
    sales,
    slr,
});
