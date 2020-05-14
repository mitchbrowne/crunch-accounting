import React from 'react';

import {
  Row,
  Col
} from 'react-bootstrap';

export default () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>&copy; 2020 Crunch Accounting. All right reserved.</p>
        <div>
          <a href="/create-contact" className="footer-link">Privacy Policy</a>
          <a href="/create-contact" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
