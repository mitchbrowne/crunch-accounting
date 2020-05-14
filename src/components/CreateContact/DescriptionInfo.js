import React from 'react';

// import bootstrap styling
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  // destructure props
  const { updateField, formInfo } = props;

  return (
    <Container className="form-wrapper">
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
              value={formInfo.description}
              onChange={updateField}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}
