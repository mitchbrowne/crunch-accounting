import React from 'react';

// import bootstrap styling
import {
  Row,
  Col
} from 'react-bootstrap';

export default (props) => {
  const {labelOne, valueOne, labelTwo, valueTwo} = props;

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <p className="modal-form-label">{labelOne}</p>
          </Col>
          <Col>
            <p>{valueOne}</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <p className="modal-form-label">{labelTwo}</p>
          </Col>
          <Col>
            <p>{valueTwo}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
