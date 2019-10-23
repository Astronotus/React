import { combineReducers } from "redux"
import tasks from "./store/Task/reduce"
import lists from "./store/List/reduce"
import {routerReducer} from "react-router-redux"


const rootReducer = combineReducers({routing:routerReducer,tasks,lists})

export default rootReducer
