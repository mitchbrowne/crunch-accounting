import React, { useState } from 'react';

import {
  Button
} from 'react-bootstrap';

// import form components
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import DescriptionInfo from './DescriptionInfo';

export default () => {
  // set state of each form section using object to hold form fields
  // const [formInfo, setState] = useState({
  //   contactInfo: {},
  //   addressInfo: {},
  //   descriptionInfo: {}
  // });

  const [formInfo, setState] = useState({
    titlePrefix: '',
    firstName: '',
    lastName: '',
    accountName: '',
    companyName: '',
    phone: '',
    fax: '',
    title: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postcode: '',
    description: ''
  });

  // updates relevant form section state upon input change from child
  const updateField = event => {
    setState({
      ...formInfo,
      [event.target.id]: event.target.value
    });
  }

  const submitForm = () => {
    console.log(formInfo);
  }

  return (
    <div>
      <h1>Create Contact</h1>
      <div id="controls">
        <Button onClick={submitForm}>
          Save
        </Button>
        <Button>
          Cancel
        </Button>
      </div>
      <ContactInfo updateField={updateField}/>
      <AddressInfo updateField={updateField}/>
      <DescriptionInfo updateField={updateField}/>
    </div>
  )
}
