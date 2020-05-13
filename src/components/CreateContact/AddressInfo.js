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
          <h3>Address Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="street">
              <Form.Label>Street No. & Street</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="1 Elizabeth Street"
                onChange={props.updateField}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Sydney"
                onChange={props.updateField}
              />
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                onChange={props.updateField}
              >
                <option>New South Wales</option>
                <option>Victoria</option>
                <option>Queensland</option>
                <option>Western Australia</option>
                <option>South Australia</option>
                <option>Tasmania</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="postcode">
              <Form.Label>Postcode</Form.Label>
              <Form.Control
                required
                type="postcode"
                placeholder="2000"
                onChange={props.updateField}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
