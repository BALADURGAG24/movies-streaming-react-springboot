import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Registering user:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Row>
        <Col>
          <Card className="shadow-lg p-4" style={{ minWidth: '320px', maxWidth: '450px' }}>
            <h2 className="mb-4 text-center">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your full name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="registerConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Confirm Password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
