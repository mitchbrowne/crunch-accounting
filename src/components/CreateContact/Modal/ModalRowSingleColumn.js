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
      <Col xs={12} md={3}>
        <p className="modal-form-label">{labelOne}</p>
      </Col>
      <Col>
        <p>{valueOne}</p>
      </Col>
    </Row>
  )
}
