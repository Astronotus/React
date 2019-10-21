import { combineReducers } from "redux"
import tasks from "./store/todo/reduce"

const rootReducer = combineReducers({tasks})

export default rootReducer
