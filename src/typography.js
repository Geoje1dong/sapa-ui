import React from 'react'
import styled from 'styled-components'

export default class Typography extends React.Component {

  _getElementByVariant = (variant, children) => {
    switch (variant) {
      case 'h1':
        return (<H1>{children}</H1>)
      case 'h2':
        return (<H2>{children}</H2>)
      case 'h3':
        return (<H3>{children}</H3>)
      case 'h4':
        return (<H4>{children}</H4>)
      case 'h5':
        return (<H5>{children}</H5>)
      case 'h6':
        return (<H6>{children}</H6>)
    }
  }
  
  render() {
    const { variant, children } = this.props
    return (
      <React.Fragment>
        {
          this._getElementByVariant(variant, children)
        }    
      </React.Fragment>
    )
  }
}

const H1 = styled.h1`
font-size:3rem;
margin-bottom:1rem;
`
const H2 = styled.h2`
font-size:2.25rem;
margin-bottom:1rem;
`

const H3 = styled.h3`
font-size:2rem;
margin-bottom:1rem;
`

const H4 = styled.h4`
font-size:1.75rem;
margin-bottom:1rem;
`

const H5 = styled.h5`
font-size:1.5rem;
margin-bottom:1rem;
`

const H6 = styled.h6`
font-size:1.25rem;
margin-bottom:1rem;
`