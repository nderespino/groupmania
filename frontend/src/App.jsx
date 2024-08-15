import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import PostComp from './components/PostComp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className ="App">
      <header className = "header-container">
      <NavbarComp/>
      </header>
      <Container className = "App-container">
      <PostComp/>
     <CardComp/>
     </Container>
    </div>
  )
}

export default App;
