import {combineReducers} from 'redux'
import employeeListReducer from './employeeListReducer'
import currentEmployeeReducer from './currentEmployeeReducer'

const rootReducer = combineReducers({
  employeeListReducer,
  currentEmployeeReducer
})

export default rootReducer;