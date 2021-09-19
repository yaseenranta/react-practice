import { taskReducer } from "./TaskReducer";
import { combineReducers } from 'redux'


const reducers = combineReducers({
    task : taskReducer
})

export default reducers