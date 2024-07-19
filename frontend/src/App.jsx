import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import './App.css';
import {Button, Alert, Breadcrumb, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className ="App">
      <header className = "header-container">
      <NavbarComp/>
      </header>
      <container className = "App-container">
     <CardComp/>
     <Form>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type = 'email' placeholder="email@email.com"></Form.Control>
      </Form.Group>
     </Form>
     <Breadcrumb>
     <Breadcrumb.Item>Test 1</Breadcrumb.Item>
     <Breadcrumb.Item>Test 2</Breadcrumb.Item>
     <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
     </Breadcrumb>
     <Alert variant ="success">this is a button</Alert>
     <Button>Test Button</Button>
     </container>
    </div>
  )
}

export default App;
