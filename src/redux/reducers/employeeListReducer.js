import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function employeeListReducer ( state=initialState.employees, action ) {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES_SUCCESS:
      return action.payload
    default:
      return state;
  }
}