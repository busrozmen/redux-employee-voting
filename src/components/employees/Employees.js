import React, {useEffect} from 'react'
import Employee from '../employee/Employee'
import { Row } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as employeeListActions from '../../redux/actions/employeeListActions'
import _ from 'lodash';

const Employees = (props) => {

  useEffect(() => {
    props.actions.getEmployees();
  }, [props.actions])

  return (
    <Row>
      {
        props.employees && _.orderBy(props.employees, ['rate','firstName'],['desc']).map(item=>(
          <Employee key={item.id} employee={item}/>
      ))
      }
    </Row>
  )
}
function mapStateToProps(state) {
  return {
    employees: state.employeeListReducer,
    currentEmployee: state.currentEmployeeReducer
  }
}

function mapDispatchToProps(dispatch) { 
  return {
    actions: {
      getEmployees: bindActionCreators(employeeListActions.getEmployees, dispatch),
      getClickedEmployee: bindActionCreators(employeeListActions.getClickedEmployee, dispatch)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Employees)