import React, { useState } from 'react';

import {
  Button
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
  const submitForm = () => {
    console.log(formInfo);
  }

  // reset the form when cancelled by user
  const cancelForm = () => {
    setState(
      initialFormInfoState
    );
  }

  return (
    <div>
      <h1>Create Contact</h1>
      <div id="controls">
        <Button onClick={submitForm}>
          Save
        </Button>
        <Button onClick={cancelForm}>
          Cancel
        </Button>
      </div>

      <ContactInfo
        updateField={updateField}
        formInfo={formInfo}
      />

      <AddressInfo
        updateField={updateField}
        formInfo={formInfo}
      />

      <DescriptionInfo
        updateField={updateField}
        formInfo={formInfo}
      />
    </div>
  )
}
