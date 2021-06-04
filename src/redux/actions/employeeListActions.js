import * as actionTypes from './actionTypes'
import { request } from 'graphql-request';

export function getEmployeesSuccess(employees) {
  return {
    type: actionTypes.GET_EMPLOYEES_SUCCESS,
    payload: employees
  }
}

export function getClickedEmployee(currentEmployee) {
  return {
    type: actionTypes.GET_CLICKED_EMPLOYEE,
    payload: currentEmployee
  }
}
export function getRateEmployee(currentEmployee, rate) {
  currentEmployee.rate = rate;
  var allEmployees=JSON.parse(localStorage.getItem('graphql-faker'));

  const query = `mutation updateEmpRate {
    updateEmployeeRate(id: "${currentEmployee.id}", rate:  ${rate}){
      id
      rate
    }
  }
  `;
  request('http://localhost:9002/graphql', query)
    .then(data => 
      allEmployees.forEach(element => {
        if(element.id === data.updateEmployeeRate.id){
          element.rate = data.updateEmployeeRate.rate
        }
      }),
      ).then(() => localStorage.setItem('graphql-faker', JSON.stringify(allEmployees)))

      return {
        type: actionTypes.GET_RATE_EMPLOYEE,
        payload: JSON.parse(localStorage.getItem('graphql-faker'))
      }
}

export function getEmployees() {
  return async function (dispatch) {
    const query = `query AllEmployees {
      employees{
        id
        firstName
        lastName
        job
        image
        birthday
        email
        address
        telephone
        rate
      }
    }`
    try {
      const data = await request('http://localhost:9002/graphql', query);
      if(localStorage.getItem('graphql-faker')){
        return dispatch(getEmployeesSuccess(JSON.parse(localStorage.getItem('graphql-faker'))))
      }
      else{
        localStorage.setItem('graphql-faker', JSON.stringify(data.employees));
        return dispatch(getEmployeesSuccess(data.employees))
      } 
    }
    catch (error) {
      return console.error(error);
    }
  }
}