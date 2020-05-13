import React from 'react';

export const phoneValidation = (number) => {
  const numberNoSpace = number.replace(/\s/g, '');
  console.log(numberNoSpace);
  return false;
}
