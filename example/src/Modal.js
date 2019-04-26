import React from 'react';
import Header from './Header'
import { FlexContainer, Button, Modal } from 'sapa-ui/dist/index';


const ulContainer = {
  backgroundColor: '#eee',
  padding: '15px 100px',
  color: '#123456'
}

const liContainer = {
  margin: '1em'
}

const h1Style = {
  fontSize: '32px',
  margin: '1em'
}

const state = {
  isOpen: false,
  type: ''
}

const ModalPage = props => (
  <FlexContainer>
    <Header />
    <Modal>
      <div>
        <h1>Modal Test</h1>
      </div>
      <div>
        <Button styles="default" text="Modal" />
      </div>
    </Modal>
    <ul style={ulContainer}>
      <li style={liContainer}>
        <h1 style={h1Style}>Default Modal</h1>
        <div className="section">
          <Button styles="default" color="primary" text='Modal 1' />
          <Button styles="default" color="primary" text='Modal 2' />
          <Button styles="default" color="primary" text='Modal 3' />
          <Button styles="default" color="primary" text='Modal 4' />
        </div>
      </li>
    </ul>
  </FlexContainer>
)

export default ModalPage