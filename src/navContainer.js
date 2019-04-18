import React from 'react'
import styled from 'styled-components'
import * as colors from './colors'

const StyledNavContaienr = styled.div`
  width: 100%;
  height: 45px;
  position: absolute;
  top:0;
  left:0;
  
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.bgColor};

  .sapa-header__logo {
    width: 240px;
    text-align: center;
    cursor: pointer;
    font-weight: 800;
    border-right: 1px solid #123456;
  }

  .sapa-header__menu {
    display: flex;
    
    div {
      padding: 1em;

      &:hover {
        cursor: pointer;
        background: rgba(0,0,0,.4);
      }
    }
  }

  & + * {
    margin-top: 45px;
  }
`

export default class NavContainer extends React.Component {

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
        <StyledNavContaienr direction={direction} bgColor={this._getBgColor(bgColor)}>
          {children}
        </StyledNavContaienr>
      </React.Fragment>
    )
  }
}
