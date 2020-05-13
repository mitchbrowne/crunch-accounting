import React from 'react';

import {
  Button
} from 'react-bootstrap';

// import form components
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import DescriptionInfo from './DescriptionInfo';

export default () => {
  return (
    <div>
      <h1>Create Contact</h1>
      <ContactInfo />
      <AddressInfo />
      <DescriptionInfo />
    </div>
  )
}
