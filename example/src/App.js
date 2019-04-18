import React, { Component } from 'react'
import { Button, Card, StyledComponent, FlexContainer } from 'sapa-ui/dist/index'
import 'reset-css';

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

export default class App extends Component {
  render () {
    return (
      <ul style={ulContainer}>
        <li style={liContainer}>
          <h1 style={h1Style}>Buttons</h1>
          <div className="section">
            <Button effect="ripple" styles="default" text='Button Default' />
            <Button effect="ripple" styles="default" color="primary" text='Button Primary' />
            <Button effect="ripple" styles="default" color="secondary" text='Button Secondary' />
            <Button effect="ripple" styles="default" color="danger" text='Button Danger' />
            <Button effect="ripple" styles="default" text='Button Disabled'/>
          </div>
          <div className="section">
            <Button styles="textBtn" text='Button Default' />
            <Button styles="textBtn" color="primary" text='Button Primary' />
            <Button styles="textBtn" color="secondary" text='Button Secondary' />
            <Button styles="textBtn" color="danger" text='Button Danger' />
            <Button  styles="textBtn" text='Button Disabled'/>
          </div>
          <div className="section">
            <Button styles="outlineBtn" text='Button Default' />
            <Button styles="outlineBtn" color="primary" text='Button Primary' />
            <Button styles="outlineBtn" color="secondary" text='Button Secondary' />
            <Button styles="outlineBtn" color="danger" text='Button Danger' />
            <Button  styles="outlineBtn" text='Button Disabled'/>
          </div>
          <div className="section">
            <Button type="nemo" color="green" text='Green Button Nemo' />
            <Button type="nemo" color="blue" text='Blue Button Nemo' />
            <Button type="one" color="red" text='Red Button One' />
            <Button type="one" color="green" text='Green Button One' />
            <Button type="one" color="blue" text='Blue Button One' />
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
      </ul>
    )
  }
}
