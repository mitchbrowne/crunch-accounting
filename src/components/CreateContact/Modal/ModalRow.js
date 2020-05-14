import React from 'react';

import {
  Row,
  Col
} from 'react-bootstrap';

export default (props) => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <p className="modal-form-label">{props.labelOne}</p>
          </Col>
          <Col>
            <p>{props.valueOne}</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <p className="modal-form-label">{props.labelTwo}</p>
          </Col>
          <Col>
            <p>{props.valueTwo}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
