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


const ModalPage = props => {

  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <FlexContainer>
      <Header />
      <Modal isOpen={isOpen} onClickBackdrop={() => setIsOpen(false)}>
        <div>
          <h1>Modal Test</h1>
        </div>
        <div>
          <Button styles="default" text="Modal" onClick={() => setIsOpen(false)} />
        </div>
      </Modal>
      <ul style={ulContainer}>
        <li style={liContainer}>
          <h1 style={h1Style}>Default Modal</h1>
          <div className="section">
            <Button styles="default" color="primary" text='Modal 1' onClick={() => setIsOpen(true)} />
            <Button styles="default" color="primary" text='Modal 2' onClick={() => setIsOpen(true)} />
            <Button styles="default" color="primary" text='Modal 3' onClick={() => setIsOpen(true)} />
            <Button styles="default" color="primary" text='Modal 4' onClick={() => setIsOpen(true)} />
          </div>
        </li>
      </ul>
    </FlexContainer>
  )
}

export default ModalPage