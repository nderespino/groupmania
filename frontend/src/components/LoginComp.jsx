import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the login attempt with the entered credentials
    console.log('Login attempted with:', { email, password });

    try {
      // Send a POST request to the login endpoint
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the JSON response from the server
      const data = await response.json();

      if (response.ok) {
        // Handle successful login (e.g., store token, redirect)
        console.log('Login successful:', data);
        // You can redirect the user or store the token here
      } else {
        // Handle login failure (e.g., show error message)
        console.error('Login failed:', data.message);
        // You can display an error message to the user here
      }
    } catch (error) {
      // Handle errors (e.g., network issues)
      console.error('Error during login:', error);
      // You can display a generic error message here
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;