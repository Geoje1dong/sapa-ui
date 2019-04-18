import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #123456;
  border: 1px solid pink;

  &:hover {
    background-color: #234567;
    cursor: pointer;
  }
`

export default class styledComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledBox/>
      </React.Fragment>
    )
  }
}
