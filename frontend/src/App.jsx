import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import CardComp from "./components/CardComp";
import PostComp from "./components/PostComp";
import LoginComp from "./components/LoginComp";
import SignupComp from "./components/SignupComp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <NavbarComp />
        </header>
        <Container className="App-container">
          <Routes>
          <Route path="/" element={
              <>
                <CardComp />
              </>
          } />
            <Route path="/login" element={<LoginComp />} />
            <Route path="/signup" element={<SignupComp />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
