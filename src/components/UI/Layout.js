import React from 'react';

import Header from './Header';

export default (props) => {
  return (
    <div className="layout-wrapper">
      <Header />
      {props.children}
    </div>
  )
}
