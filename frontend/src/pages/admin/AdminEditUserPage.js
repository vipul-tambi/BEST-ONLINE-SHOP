import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEditUserPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit user</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
                name="name"
                defaultValue="John"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last NAme</Form.Label>
              <Form.Control
                name="lastName"
                required
                type="text"
                defaultValue="Doe"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                name="email"
                defaultValue="john@email.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type="checkbox" label="Is admin" />
            </Form.Group>
            <Button variant="primary" type="submit">
              UPDATE
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;
