import React from 'react'

export default class Typography extends React.Component {

  _getElementByVariant = (variant, children) => {
    switch (variant) {
      case 'h1':
        return (<h1>{children}</h1>)
      case 'h2':
        return (<h2>{children}</h2>)
      case 'h3':
        return (<h3>{children}</h3>)
      case 'h4':
        return (<h4>{children}</h4>)
      case 'h5':
        return (<h5>{children}</h5>)
      case 'h6':
        return (<h6>{children}</h6>)
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