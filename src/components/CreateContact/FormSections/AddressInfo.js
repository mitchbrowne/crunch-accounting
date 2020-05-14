import React from 'react';

// import bootstrap styling
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  //destructure props
  const {
    updateField,
    formInfo,
    validatePostcode,
    postcodeValid
  } = props;

  return (
    <Container className="form-wrapper">
      <Row>
        <Col>
          <h3 className="form-title">Address Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
            <Form.Row>
              <Form.Group as={Col} xs="12" lg="6" controlId="street">
                <Form.Label>Street No. & Street</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="1 Elizabeth Street"
                  value={formInfo.street}
                  onChange={updateField}
                />
                <Form.Control.Feedback type="invalid">
                  {'Street No. & Street are required'}
                </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  {'City is required'}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} xs="12" lg="6" controlId="state">
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
                  {'Postcode is invalid'}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Col>
        </Row>
    </Container>
  )
}
