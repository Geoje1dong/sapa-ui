import React from 'react'
import styled from 'styled-components'
import * as colors from './colors'

/**
 * 그리드 컴포넌트
 * spacing 그리드의 마진 값을 설정 합니다.
 * Paper로 그리드의 갯수를 나누고 item은 그리드의 갯수 입니다.
 * 보통 12그리드를 표준으로 사용하고 있습니다.
 */

const Gridcontainer = styled.div`
  display: block;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export default class Grid extends React.Component {

    _getBgColor = (bgColor) => {
        if (bgColor) {
            return colors[bgColor.toUpperCase()]
        }
        return '#fff';
    }

    render() {
        const { bgColor, children } = this.props;
        return (
            <React.Fragment>
                <Gridcontainer bgColor={this._getBgColor(bgColor)}>
                    {children}
                </Gridcontainer>
            </React.Fragment>
        )
    }
}
