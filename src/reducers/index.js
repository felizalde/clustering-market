import { combineReducers } from 'redux'

import sales from './sales-reducer'
import conf from './conf-reducer'

export default combineReducers({
    sales,
    conf,
});
