import React from 'react';

import {
  Row,
  Col
} from 'react-bootstrap';

export default (props) => {
  // destructure props
  const { labelOne, valueOne } = props;

  return (
    <Row>
      <Col xs={3} md={3}>
        <p className="modal-form-label">{labelOne}</p>
      </Col>
      <Col xs={12} md={9}>
        <p>{valueOne}</p>
      </Col>
    </Row>
  )
}
