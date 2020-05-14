import React from 'react';

import {
  Row,
  Col
} from 'react-bootstrap';

export default (props) => {
  return (
    <Row>
      <Col xs={12} md={3}>
        <p className="modal-form-label">{props.labelOne}</p>
      </Col>
      <Col>
        <p>{props.valueOne}</p>
      </Col>
    </Row>
  )
}
