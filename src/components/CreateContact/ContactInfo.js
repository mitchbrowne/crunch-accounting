import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  const updateField = props.updateField;
  const formInfo = props.formInfo;

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
                value={formInfo.titlePrefix}
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
                value={formInfo.firstName}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Smith"
                value={formInfo.lastName}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="accountName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John's Joinery"
                value={formInfo.accountName}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="companyName">
              <Form.Label>Company Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={formInfo.companyName}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder="02 123 456 78"
                value={formInfo.phone}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="fax">
              <Form.Label>Fax (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="John's Joinery"
                value={formInfo.fax}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
                value={formInfo.title}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="samle@gmail.com"
                value={formInfo.email}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group id="emailOptOutCheckbox">
              <Form.Check
                type="checkbox"
                label="Email Opt Out"
                value={formInfo.emailOptOutCheckbox}
                onChange={updateField}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
