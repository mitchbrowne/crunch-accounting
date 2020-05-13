import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default () => {
  // set state using object to hold form fields
  const [descriptionInfo, setState] = useState({
    description: ''
  });

  // updates relevant state field upon input change
  const updateField = event => {
    setState({
      ...descriptionInfo,
      [event.target.id]: event.target.value
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Description Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={updateField}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}
