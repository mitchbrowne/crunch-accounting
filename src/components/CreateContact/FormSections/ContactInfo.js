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
  const {
    formInfo,
    updateField,
    updateOptOut,
    validatePhone,
    phoneValid,
    validateEmail,
    emailValid
  } = props;

  return (
    <Container className="form-wrapper">
      <Row>
        <Col>
          <h3 className="form-title">Contact Information</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Row>
              <Form.Group as={Col} xs="4" lg="2" controlId="titlePrefix">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  as="select"
                  value={formInfo.titlePrefix}
                  onChange={updateField}
                >
                  <option>None</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Miss</option>
                  <option>Ms</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} xs="8" lg="4" controlId="firstName">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="John"
                  value={formInfo.firstName}
                  onChange={updateField}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Smith"
                  value={formInfo.lastName}
                  onChange={updateField}
                />
              </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" lg="6" controlId="accountName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John's Joinery"
                value={formInfo.accountName}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="companyName">
              <Form.Label>Company Name (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={formInfo.companyName}
                onChange={updateField}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" lg="6" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="phone"
                placeholder="02 123 456 78"
                value={formInfo.phone}
                onChange={validatePhone}
                isInvalid={!phoneValid}
              />
              <Form.Control.Feedback type="invalid">
                {'Phone number is invalid'}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="fax">
              <Form.Label>Fax (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="John's Joinery"
                value={formInfo.fax}
                onChange={updateField}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" lg="6" controlId="title">
              <Form.Label>Title (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Owner"
                value={formInfo.title}
                onChange={updateField}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="samle@gmail.com"
                value={formInfo.email}
                onChange={validateEmail}
                isInvalid={!emailValid}
              />
              <Form.Control.Feedback type="invalid">
                {'Email address is invalid'}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group id="emailOptOutCheckbox">
              <Form.Label >Email Opt Out</Form.Label>
              <Form.Check
                inline
                className="form-margin-left"
                type="checkbox"
                onChange={updateOptOut}
              />
            </Form.Group>
          </Form.Row>
        </Col>
      </Row>
    </Container>
  )
}
