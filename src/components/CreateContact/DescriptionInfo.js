import React, { useState } from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
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
              onChange={props.updateField}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}
