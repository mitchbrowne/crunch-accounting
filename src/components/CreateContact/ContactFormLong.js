import React, { useState } from 'react';

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Validator from 'email-validator';
import { postcodeValidator } from 'postcode-validator';


import {
  Button,
  Row,
  Col,
  Form
} from 'react-bootstrap';

// import form components
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import DescriptionInfo from './DescriptionInfo';

export default () => {
  // hold initial field states within object
  const initialFormInfoState = {
    titlePrefix: '',
    firstName: '',
    lastName: '',
    accountName: '',
    companyName: '',
    phone: '',
    fax: '',
    title: '',
    email: '',
    emailOptOutCheckbox: '',
    street: '',
    city: '',
    state: '',
    postcode: '',
    description: ''
  }

  // set state of each form field using state object to hold fields
  const [formInfo, setState] = useState(
    initialFormInfoState
  );

  // updates relevant form section state upon input change from child
  const updateField = event => {
    setState({
      ...formInfo,
      [event.target.id]: event.target.value
    });
  }

  // perform code when form is submitted by user
  const submitForm = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log('hey');
    }
    if (form.checkValidity() === true) {
      console.log('ITS TRUE');
      event.preventDefault();
      console.log(formInfo);
    }
    console.log('you');
    setValidated(true);
  }

  // reset the form when cancelled by user
  const cancelForm = () => {
    setState(
      initialFormInfoState
    );
    setValidated(false);
  }

  const [validated, setValidated] = useState(false);

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
    <div>
      <div className="contact-header">
        <h1 className="contact-title">Create Contact</h1>
        <div id="controls">
          <button onClick={cancelForm} className="button button-light">
            Cancel
          </button>
          <button type="submit" form="mainForm" className="button button-dark">
            Save
          </button>
        </div>
      </div>

      <div className="contact-content">
        <div className="form-wrapper">
          <Form noValidate validated={validated} onSubmit={submitForm} id="mainForm">
          <Row>
            <Col>
              <h3 className="form-title">Contact Information</h3>
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 className="form-title">Address Information</h3>
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
          </Row>

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
          </Form>
        </div>
      </div>
    </div>
  )
}
