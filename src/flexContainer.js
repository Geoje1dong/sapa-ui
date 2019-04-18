import React from 'react'
import styled from 'styled-components'
import * as colors from './colors'

const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export default class FlexContainer extends React.Component {

  _getBgColor = (bgColor) => {
    if (bgColor) {
      return colors[bgColor.toUpperCase()]
    }

    return '#fff';
  }
  
  render() {
    const { direction, bgColor, children } = this.props;
    return (
      <React.Fragment>
        <StyledFlexContainer direction={direction} bgColor={this._getBgColor(bgColor)}>
          {children}
        </StyledFlexContainer>
      </React.Fragment>
    )
  }
}
