import {Container, Navbar, NavbarBrand} from 'reactstrap'
import Employees from '../employees/Employees'
import EmployeeDetail from '../employeeDetail/EmployeeDetail'
import './App.css'
import { FiFeather } from "react-icons/fi"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar expand="md">
      <NavbarBrand href="/"><FiFeather /><span>Company Employees</span></NavbarBrand>
    </Navbar>  
    <Container>
      <Router>
          <Switch>
            <Route exact path="/" component={Employees}></Route>
            <Route exact path="/EmployeeDetail" component={EmployeeDetail}></Route>
          </Switch>
      </Router>
    </Container>
    </>
  );
}

export default App;