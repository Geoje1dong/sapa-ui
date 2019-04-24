import React from 'react'
import Button from './button'
import styled from 'styled-components'

const h1Style = {
  margin: '1em'
}

const CardContainer = styled.div`
  display: flex;
  width: 360px;
  height: 360px;
  background-color: #fff;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
  border-radius: 6px;
  margin: 1em;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 1000px) {
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  &:hover {
    opacity: .4;
  }
`

const CardHeader = styled.div`
  height: 240px;
  background: url(${props => props.url});
  background-size: cover;
  width: 100%;
  border-radius: 6px 6px 0 0;
`

const CardContent = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
`

export default class Card extends React.Component {
  render() {
    const { text, url } = this.props
    const defaultUrl = 'https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg'
    const defaultText = 'Default Text'
    return (
      <CardContainer>
        <CardHeader url={url || defaultUrl} />
        <CardContent>
          <h1 style={h1Style}>{text || defaultText}</h1>
          <div>
            <Button effect="ripple" styles="default" color="primary" text='Button Primary' />
            <span>{' '}</span>
            <Button effect="ripple" styles="default" color="secondary" text='Button Secondary' />
          </div>
        </CardContent>
      </CardContainer>
    )
  }
}