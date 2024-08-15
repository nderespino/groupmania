import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Image} from 'react-bootstrap';



function NavigationBar() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">Groupmania</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
        </Nav>
        
        <Nav>
        <Image className='profile-picture' src="https://picsum.photos/id/237/50/" roundedCircle />
          <NavDropdown title="Profile" id="basic-nav-dropdown" className="dropdown-menu-right">
            <NavDropdown.Item href="#action/3.1" className= "custom-dropdown-item">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"className= "custom-dropdown-item">Log Out</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"className= "custom-dropdown-item">Delete Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
