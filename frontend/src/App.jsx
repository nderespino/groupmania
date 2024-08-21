import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import PostComp from './components/PostComp';
import LoginComp from './components/LoginComp';
import SignupComp from './components/SignupComp'; // Import the Signup component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <NavbarComp />
        </header>
        <Container className="App-container">
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <LoginComp onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <SignupComp onSignup={handleLogin} />
                )
              }
            />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <PostComp />
                    <CardComp />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;