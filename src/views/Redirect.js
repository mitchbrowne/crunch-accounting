import React from 'react';
import { Redirect } from 'react-router-dom';

export default () => {


  return (
    <div className="redirect-wrapper">
      <h3>Redirecting to Create Contact Page...</h3>
      <Redirect to='/create-contact' />
    </div>
  )
}
