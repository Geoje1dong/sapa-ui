import React from 'react';
import {
  Button, 
  Card,
  StyledComponent,
  FlexContainer,
  Grid,
  gridPaper,
} from 'sapa-ui/dist/index';
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

const ButtonPage = props => (
  <FlexContainer>
    <Header />
    <ul style={ulContainer}>
      <li style={liContainer}>
        <h1 style={h1Style}>Buttons</h1>
        <div className="section">
          <Button styles="default" text='Button Default' />
          <Button styles="default" color="primary" text='Button Primary' />
          <Button styles="default" color="secondary" text='Button Secondary' />
          <Button styles="default" color="danger" text='Button Danger' />
          <Button styles="default" text='Button Disabled'/>
        </div>
        <div className="section">
          <Button styles="textBtn" text='Button Default' />
          <Button styles="textBtn" color="primary" text='Button Primary' />
          <Button styles="textBtn" color="secondary" text='Button Secondary' />
          <Button styles="textBtn" color="danger" text='Button Danger' />
          <Button styles="textBtn" text='Button Disabled'/>
        </div>
        <div className="section">
          <Button styles="outlineBtn" text='Button Default' />
          <Button styles="outlineBtn" color="primary" text='Button Primary' />
          <Button styles="outlineBtn" color="secondary" text='Button Secondary' />
          <Button styles="outlineBtn" color="danger" text='Button Danger' />
          <Button styles="outlineBtn" text='Button Disabled'/>
        </div>
        <div className="section">
          <Button styles="default" type="nemo" color="default" text='Green Button Nemo' />
          <Button styles="default" type="radius" color="primary" text='Blue Button Nemo' />
          <Button styles="default" type="circle" color="secondary" text='+' />
          <Button styles="default" type="extended" color="danger" text='Green Button One' />
          <Button styles="default" type="radius" color="blue" text='Blue Button One' />
        </div>
        
      </li>
      <li style={liContainer}>
        <h1 style={h1Style}>Card</h1>
        <div style={cardContainerStyle}>
          {
            [1,2,3,4,5,6,7,8,9].map(data => {
              return <Card key={data} />
            })
          }
        </div>
      </li>
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
      <li>
      <h1 style={h1Style}>GridLayout Example</h1>
        <Grid bgColor="defaultbg">
          <gridPaper/>
        </Grid>
        <Grid bgColor="defaultbg">
          <gridPaper/>
          <gridPaper/>
        </Grid>
      </li>
    </ul>
  </FlexContainer>
)

export default ButtonPage