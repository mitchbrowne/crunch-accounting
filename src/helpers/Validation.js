import React from 'react';

export const validateForm = (formInfo) => {
  console.log("Validating...");
  const formValid = {
    titlePrefix: false,
    firstName: false,
    lastName: false,
    accountName: false,
    phone: false,
    email: false,
    emailOptOutCheckbox: false,
    street: false,
    city: false,
    state: false,
    postcode: false,
    description: false
  }
  if (formInfo.titlePrefix) {
    formValid.titlePrefix = true;
  }
  
}
