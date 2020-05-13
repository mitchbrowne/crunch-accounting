import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default () => {
  // set state using object to hold form fields
  const [contactInfo, setState] = useState({
    titlePrefix: '',
    firstName: '',
    lastName: '',
    accountName: '',
    companyName: '',
    phone: '',
    fax: '',
    title: '',
    email: ''
  });

  // updates relevant state field upon input change
  const updateField = event => {
    setState({
      ...contactInfo,
      [event.target.id]: event.target.value
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Contact Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="titlePrefix">
              <Form.Control
                as="select"
                onChange={updateField}
                >
                <option>None</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Ms</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Smith"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="accountName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John's Joinery"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="companyName">
              <Form.Label>Company Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder="02 123 456 78"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="fax">
              <Form.Label>Fax (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="John's Joinery"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="samle@gmail.com"
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group id="emailOptOutCheckbox">
              <Form.Check
                type="checkbox"
                label="Email Opt Out"
                onChange={updateField}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
