import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function currentEmployeeReducer ( state=initialState.currentEmployee, action ) {
  switch (action.type) {
    case actionTypes.GET_CLICKED_EMPLOYEE:
      return action.payload
    case actionTypes.GET_RATE_EMPLOYEE:
      return action.payload
    default:
      return state;
  }
}