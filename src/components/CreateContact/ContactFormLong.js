import React, { useState } from 'react';

// import validator libraries
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Validator from 'email-validator';
import { postcodeValidator } from 'postcode-validator';

// import components
import ContactInfo from './FormSections/ContactInfo';
import AddressInfo from './FormSections/AddressInfo';
import DescriptionInfo from './FormSections/DescriptionInfo';
import ConfirmationModal from './Modal/ConfirmationModal';

// import bootstrap styling
import {
  Form
} from 'react-bootstrap';

export default () => {
  // hold initial field states within object
  // const initialFormInfoState = {
  //   titlePrefix: '',
  //   firstName: '',
  //   lastName: '',
  //   accountName: '',
  //   companyName: '',
  //   phone: '',
  //   fax: '',
  //   title: '',
  //   email: '',
  //   emailOptOutCheckbox: false,
  //   street: '',
  //   city: '',
  //   state: 'New South Wales',
  //   postcode: '',
  //   description: ''
  // }

  const initialFormInfoState = {
    titlePrefix: '',
    firstName: 'John',
    lastName: 'Smith',
    accountName: 'Johns Joinery',
    companyName: '',
    phone: '02 123 456 78',
    fax: '',
    title: '',
    email: 'samle@gmail.com',
    emailOptOutCheckbox: false,
    street: '1 Elizabeth',
    city: 'Sydney',
    state: 'New South Wales',
    postcode: '2000',
    description: 'Please follow up with email after calls with this client.'
  }

  // set state of each form field using state object to hold fields
  const [formInfo, setState] = useState(
    initialFormInfoState
  );

  // set state for the modal show
  const [modalShow, setModalShow] = useState(false);

  // set state for each validation
  const [validated, setValidated] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [postcodeValid, setPostcodeValid] = useState(true);


  // updates relevant form section state upon input change from child
  const updateField = event => {
    setState({
      ...formInfo,
      [event.target.id]: event.target.value
    });
  }

  // updates email opt out state upon checkbox click
  const updateOptOut = event => {
    setState({
      ...formInfo,
      emailOptOutCheckbox: event.target.checked
    });
  }

  // submit form when form is submitted by user
  const submitForm = event => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === true &&
      phoneValid &&
      emailValid &&
      postcodeValid
    ) {
      event.preventDefault();
      setModalShow(true);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  // reset the form when cancelled by user
  const cancelForm = () => {
    setState(
      initialFormInfoState
    );
    setValidated(false);
  }

  // validate phone number, using libphonenumber-js library
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

  // validate email, using email-validator library
  const validateEmail = event => {
    setEmailValid(false);
    if (Validator.validate(event.target.value)) {
      setEmailValid(true);
    }
    updateField(event);
  }

  // validate postcode, using postcode-validator library
  const validatePostcode = event => {
    setPostcodeValid(false);
    if (postcodeValidator(event.target.value, 'AU')) {
      setPostcodeValid(true);
    }
    updateField(event);
  }

  return (
    <div>
      <ConfirmationModal
        show={modalShow}
        forminfo={formInfo}
        onHide={() => setModalShow(false)}
      />

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

      <div className="contact-content-wrapper">
        <div className="form-wrapper">
          <Form noValidate validated={validated} onSubmit={submitForm} id="mainForm">
            <ContactInfo
              formInfo={formInfo}
              updateField={updateField}
              updateOptOut={updateOptOut}
              validatePhone={validatePhone}
              phoneValid={phoneValid}
              validateEmail={validateEmail}
              emailValid={emailValid}
            />
            <AddressInfo
              formInfo={formInfo}
              updateField={updateField}
              validatePostcode={validatePostcode}
              postcodeValid={postcodeValid}
            />
            <DescriptionInfo
              formInfo={formInfo}
              updateField={updateField}
            />
          </Form>
        </div>
      </div>
    </div>
  )
}
