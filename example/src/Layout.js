import React from 'react';
import { FlexContainer, StyledComponent, FlexLayout } from 'sapa-ui/dist/index';
import Header from './Header'

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

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

const LayoutPage = props => (
  <FlexContainer>
    <Header />
    <ul style={ulContainer}>
      <li style={liContainer}>
        <h1 style={h1Style}>Styled Component Example</h1>
        <FlexContainer>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexContainer>
        <FlexContainer direction="column" bgColor="primary">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexContainer>
      </li>
      <li style={liContainer}>
        <h1 style={h1Style}>No Scroll 100 Percent Layout</h1>
        <FlexLayout type="no-scroll">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Nav Layout</h1>
        <FlexLayout type="nav">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Footer Layout</h1>
        <FlexLayout type="footer">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Different Order Menu</h1>
        <FlexLayout type="menu">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Form Label Vertical Center Order</h1>
        <FlexLayout type="center">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Center Icon Ver1</h1>
        <FlexLayout type="center-1">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Center Icon Ver2</h1>
        <FlexLayout type="center-2">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Dynamic Width Box</h1>
        <FlexLayout type="dynamic">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Text Overflow Box</h1>
        <FlexLayout type="text-over">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Up Down Box</h1>
        <FlexLayout type="up-down">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
        <h1 style={h1Style}>Interactive Box</h1>
        <FlexLayout type="interactive">
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
          <StyledComponent/>
        </FlexLayout>
      </li>
    </ul>
  </FlexContainer>
)

export default LayoutPage