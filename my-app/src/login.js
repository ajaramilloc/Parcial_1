import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import image from './green-salad.jpg';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;
    
    if (!username.trim()) {
      setUsernameError('El nombre de usuario es obligatorio');
      isValid = false;
    } else {
      setUsernameError('');
    }
    
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    } else if (password.length > 7) {
      setPasswordError('La contraseña no debe tener más de 7 caracteres');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/home");
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={7} className="d-flex flex-column justify-content-center align-items-center text-black">
          <div className="text-center">
            <h1 className="display-4 fw-bold">TOO GOOD TO GO</h1>
            <p className="lead" style={{color: 'orange'}}>FOOD WASTING SOLUTION</p>
            <Image 
              src={image}
              alt="Logo del sitio" 
              width={150} 
              className="mb-4"
            />
          </div>
        </Col>

        <Col md={5} className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'green' }}>
          
          <Card style={{ width: '80%', border: 'none', backgroundColor: 'green' }}>
            <Card.Body className="p-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control 
                    type="text" 
                    placeholder="Username" 
                    className="py-2 rounded-pill"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameError && <small className="text-danger">{usernameError}</small>}
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className="py-2 rounded-pill"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <small className="text-danger">{passwordError}</small>}
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2 rounded-pill"
                  style={{ backgroundColor: 'white', color: 'black', border: 'none' }}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
