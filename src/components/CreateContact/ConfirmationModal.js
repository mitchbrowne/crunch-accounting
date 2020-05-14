import React from 'react';

import { closeX, tick } from '../../assets/Icons';

import ModalRow from './ModalRow';
import ModalRowSingleColumn from './ModalRowSingleColumn';

import {
  Modal,
  Button,
  Row,
  Col,
  Form
} from 'react-bootstrap';

export default (props) => {
  const formInfo = props.formInfo;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-wrapper">
        <div className="close-wrapper">
          <div className="modal-close" onClick={props.onHide}>{closeX()}</div>
        </div>
        <div className="modal-form-wrapper">
          <h1>Saved <span>{tick()}</span></h1>
          <p className="modal-text">The contact details have been saved.</p>
        </div>
        <div>
          <div className="modal-form-wrapper">
            <h3 className="form-title">Contact Information</h3>
            <ModalRow
              labelOne='First Name'
              valueOne={formInfo.firstName}
              labelTwo='Last Name'
              valueTwo={formInfo.lastName}
            />
            <ModalRow
              labelOne='Account Name'
              valueOne={formInfo.accountName}
              labelTwo='Company Name'
              valueTwo={formInfo.companyName}
            />
            <ModalRow
              labelOne='Phone'
              valueOne={formInfo.phone}
              labelTwo='Fax'
              valueTwo={formInfo.fax}
            />
            <ModalRow
              labelOne='Title'
              valueOne={formInfo.title}
              labelTwo='Email'
              valueTwo={formInfo.email}
            />
            <ModalRow
              labelOne='Email Opt Out'
              valueOne={formInfo.emailOptOutCheckbox ? 'Yes' : 'No'}
              labelTwo=''
              valueTwo=''
            />
          </div>
          <div className="modal-form-wrapper">
            <h3 className="form-title">Address Information</h3>
            <ModalRow
              labelOne='Street No. & Street'
              valueOne={formInfo.street}
              labelTwo='City'
              valueTwo={formInfo.city}
            />
            <ModalRow
              labelOne='State'
              valueOne={formInfo.state}
              labelTwo='Postcode'
              valueTwo={formInfo.postcode}
            />
          </div>
          <div className="modal-form-wrapper">
            <h3 className="form-title">Description Information</h3>
            <ModalRowSingleColumn
              labelOne='Description'
              valueOne={formInfo.description}
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
