import React from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default () => {
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
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control as="select">
                <option>None</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Ms</option>
              </Form.Control>
              <Form.Control
                required
                type="text"
                placeholder="John"
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Smith"
              />
            </Form.Group>

            <Form.Group controlId="accountName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John's Joinery"
              />
            </Form.Group>

            <Form.Group controlId="companyName">
              <Form.Label>Company Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder="02 123 456 78"
              />
            </Form.Group>

            <Form.Group controlId="fax">
              <Form.Label>Fax (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="John's Joinery"
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="samle@gmail.com"
              />
            </Form.Group>

            <Form.Group id="emailOptOutCheckbox">
              <Form.Check
                type="checkbox"
                label="Email Opt Out"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
