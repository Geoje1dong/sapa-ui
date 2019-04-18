import React from 'react';
import { FlexContainer, StyledComponent } from 'sapa-ui/dist/index';
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
    </ul>
  </FlexContainer>
)

export default LayoutPage