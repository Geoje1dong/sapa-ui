import React from 'react'
import styled from 'styled-components'

const NoScroll100PercentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  flex-item {
    flex: 1;
    overflow: auto;
  }
`

const NavLayout = styled.div`
  display: flex;

  .flex-item {
    flex: none;   
  }
  
  .flex-item-gnb {
    margin-left: auto;
  }
`

const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;

  .flex_item {
    margin-top: auto;
  }
`

const DifferentOrderMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const FormLabelVerticalCenterOrder = styled.div`
  display: flex;
  align-items: center;
`

const CenterIconVer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CenterIconVer2 = styled.div`
  display: flex;
  .flex-item {
    margin: auto;
  }
`

const DynamicWidthBox = styled.div`
  display: flex;
  .flex_item {
    max-width: 300px;
  }
`

const TextOverFlowBox = styled.div`
  display: flex;
  width: 100%
  .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
`

const UpDownFlowBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`

const InteractiveBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  .flex_item_list {
    flex-basis: 33.3%;
    display: flex;
    flex-direction: column;
  }

  .flex_item_image {
    flex: auto;
  }
`

/**
 * @description Layout 10가지 선택 가능한 컴포넌트
 * @property type
 */
export default class FlexLayout extends React.Component {
  render() {
    const { type } = this.props
    const DisplayLayout = display === 'flex' ? FlexLayout : BlockLayout
    return (
      <DisplayLayout>
      </DisplayLayout>
    )
  }
}