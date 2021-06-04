import React from 'react'
import { connect } from 'react-redux'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './EmployeeDetail.css'

const EmployeeDetail = (props) => {
  const {currentEmployee} = props;

  return (
    <Card className="employee-detail">
      <CardImg top src={currentEmployee.image} alt="Employee image" />
      <CardBody>
        <CardTitle tag="h5">{currentEmployee.firstName} {currentEmployee.lastName}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{currentEmployee.job}</CardSubtitle>
        <CardText>Rate: <span>{currentEmployee.rate}</span></CardText>
        <CardText>Birthday: <span>{currentEmployee.birthday}</span></CardText>
        <CardText>Email: <span>{currentEmployee.email}</span></CardText>
        <CardText>Address: <span>{currentEmployee.address}</span></CardText>
        <CardText>Telephone: <span>{currentEmployee.telephone}</span></CardText>
      </CardBody>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    currentEmployee: state.currentEmployeeReducer,
  }
}
export default connect (mapStateToProps)(EmployeeDetail)