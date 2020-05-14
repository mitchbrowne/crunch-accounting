import React, { useState } from 'react';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Validator from 'email-validator';

import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  const updateField = props.updateField;
  const formInfo = props.formInfo;

  const [phoneValid, setPhoneValid] = useState(true);
  const phoneValidErrorMessage = 'Phone number not valid.'

  const [emailValid, setEmailValid] = useState(true);
  const emailValidErrorMessage = 'Email not valid.'

  const validatePhone = event => {
    setPhoneValid(false);
    const phoneNumber = parsePhoneNumberFromString(event.target.value, 'AU');
    if (phoneNumber) {
      if (phoneNumber.isValid()) {
        setPhoneValid(true);
      }
    }
    updateField(event);
  }

  const validateEmail = event => {
    setEmailValid(false);
    if (Validator.validate(event.target.value)) {
      setEmailValid(true);
    }
    updateField(event);
  }

  return (
    <div className="form-wrapper">
      <Row>
        <Col>
          <h3 className="form-title">Contact Information</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="titlePrefix">
                  <Form.Label>Title Prefix</Form.Label>
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
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
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
              <Form.Group as={Col} controlId="accountName">
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
              <Form.Group as={Col} controlId="phone">
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
                  {phoneValidErrorMessage}
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
              <Form.Group as={Col} controlId="title">
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
                  {emailValidErrorMessage}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Group id="emailOptOutCheckbox">
              <Form.Check
                type="checkbox"
                label="Email Opt Out"
                value={formInfo.emailOptOutCheckbox}
                onChange={updateField}
              />
            </Form.Group>


          </Form>
        </Col>
      </Row>
    </div>
  )
}
