import React from 'react'
import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
`

const BlockLayout = styled.div`
  
`

/**
 * 레이아웃을 꾸밀때 사용하는 컴포넌트
 * 
 * 어떤 옵션을 줄 것인가
 * 1. display 속성을 받아서 
 * 2. margin, padding
 * 3. overflow
 * 4. 
 */
export default class Layout extends React.Component {
  render() {
    const { display } = this.props
    const DisplayLayout = display === 'flex' ? FlexLayout : BlockLayout
    return (
      <DisplayLayout>
      </DisplayLayout>
    )
  }
}