import currentMode from './currentMode'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    mode:currentMode,
})

export default allReducers;