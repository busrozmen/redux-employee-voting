import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as employeeListActions from '../../redux/actions/employeeListActions'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
import { BsChevronRight } from "react-icons/bs";
import './Employee.css';

const Employee = (props) => {
  const {employee} = props;
  const selectEmployee = (employee) => {
    props.actions.getClickedEmployee(employee)
  }
  const ratingChanged = (employee, newRating) => {
    props.actions.getRateEmployee(employee, newRating)
  };

  return (
      <Col sm='12'>
        <Card className='employee'>
          <CardImg top src={employee.image} alt="Employee image" />
          <CardBody>
            <div>
              <CardTitle tag="h5">{employee.firstName} {employee.lastName}</CardTitle>
              <CardSubtitle tag="h6" className="text-muted">{employee.job}</CardSubtitle>
            </div>
            <CardText>{employee.email}</CardText>
            <ReactStars
              count={5}
              onChange={(e)=>ratingChanged(employee,e)}
              value={employee.rate}
              size={24}
              activeColor="#ffd700"
            />
            <Link className="detail-wrapper" to="/EmployeeDetail" onClick={() => selectEmployee(employee)} style={{textDecoration:'none'}}>View Detail<BsChevronRight/></Link>
          </CardBody>
        </Card>
      </Col>
  )
}
function mapStateToProps(state) {
  return {
    employees: state.currentEmployeeReducer,
    currentEmployee: state.currentEmployeeReducer,
  }
}
function mapDispatchToProps(dispatch) { 
  return {
    actions: {
      getClickedEmployee: bindActionCreators(employeeListActions.getClickedEmployee, dispatch),
      getRateEmployee: bindActionCreators(employeeListActions.getRateEmployee, dispatch)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Employee)