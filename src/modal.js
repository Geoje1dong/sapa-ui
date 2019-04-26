import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
`

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #123456;
  opacity: .4;
  z-index: 10;
`

const ModalContentBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;
  outline: 0;

  z-index: 20;
`

const ModalDialog = styled.div`
  width: 600px;
  margin: 30px auto;
  position: relative;
`

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 8px 40px 0 rgba(0,0,0,.3);
  background-clip: padding-box;
  outline: 0;
  box-shadow: 0 8px 40px 0 rgba(0,0,0,.3);


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Modal extends React.Component {
  render() {
    return (
      <ModalContainer>
        <ModalBackdrop />
        <ModalContentBox>
          <ModalDialog>
            <ModalContent>
              {this.props.children}
            </ModalContent>
          </ModalDialog>
        </ModalContentBox>
      </ModalContainer>
    )
  }
}

export default Modal