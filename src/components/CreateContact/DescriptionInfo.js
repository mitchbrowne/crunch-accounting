import React from 'react';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  return (
    <div className="form-wrapper">
      <Row>
        <Col>
          <h3 className="form-title">Description Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              value={props.formInfo.description}
              onChange={props.updateField}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}
