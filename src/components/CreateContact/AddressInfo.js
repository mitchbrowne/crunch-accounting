import React, { useState } from 'react';

import { postcodeValidator } from 'postcode-validator';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  const updateField = props.updateField;
  const formInfo = props.formInfo;

  const [postcodeValid, setPostcodeValid] = useState(true);
  const postcodeValidErrorMessage = 'Postcode not valid.'

  const validatePostcode = event => {
    setPostcodeValid(false);
    if (postcodeValidator(event.target.value, 'AU')) {
      setPostcodeValid(true);
    }
    updateField(event);
  }

  return (
    <div className="form-wrapper">
      <Row>
        <Col>
          <h3 className="form-title">Address Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="street">
                <Form.Label>Street No. & Street</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="1 Elizabeth Street"
                  value={formInfo.street}
                  onChange={updateField}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Sydney"
                  value={formInfo.city}
                  onChange={updateField}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  value={formInfo.state}
                  onChange={updateField}
                >
                  <option>New South Wales</option>
                  <option>Victoria</option>
                  <option>Queensland</option>
                  <option>Western Australia</option>
                  <option>South Australia</option>
                  <option>Tasmania</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="postcode">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  required
                  type="postcode"
                  placeholder="2000"
                  value={formInfo.postcode}
                  onChange={validatePostcode}
                  isInvalid={!postcodeValid}
                />
                <Form.Control.Feedback type="invalid">
                  {postcodeValidErrorMessage}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
