import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default (props) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="content-wrapper">
        <div>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
