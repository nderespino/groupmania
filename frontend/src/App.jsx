import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import PostComp from './components/PostComp';
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
        <PostComp/>
     <CardComp/>
     </container>
    </div>
  )
}

export default App;
