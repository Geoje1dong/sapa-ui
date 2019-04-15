import React from 'react'

const colors = {
  primary: {
    color: '#fff',
    backgroundColor: '#3F51B5'
  },
  secondary: {
    color: '#fff',
    backgroundColor: '#FF5722'
  },
  danger: {
    color: '#fff',
    backgroundColor: '#F44336'
  }
}

const types = {
  nemo: {
    border: '1px solid'
  },
  one: {
    border: '1'
  }
}

const styles = {
  default:{
    borderRadius: '4px'
  },

  textBtn: {
    backgroundColor: 'none !important'
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  _rippleBtn = (e) => {
    const $target = e.target;            
    const rect = $target.getBoundingClientRect();
    let $rippleEffect = $target.querySelector('.ripple-effect-box');
    if(!$rippleEffect){
      $rippleEffect = document.createElement('span')  //span 생성
      $rippleEffect.className = 'ripple-effect-box';   // span에 class rippleEffect 추가
      $rippleEffect.style.height = $rippleEffect.style.width = Math.max(rect.width, rect.height) + 'px';  // Math.max(rect.width, rect.height) 두개를 비교하여 값이 큰걸 가져온다
      $target.appendChild($rippleEffect);
    }
    $rippleEffect.classList.remove('show');    // show class 제거
    let top = e.pageY - rect.top - $rippleEffect.offsetHeight/2 - window.scrollY;
    let left = e.pageX - rect.left - $rippleEffect.offsetWidth/2 - document.body.scrollLeft;
    console.log(e.pageY);
    console.log(rect.top);
    console.log($rippleEffect.offsetHeight);
    console.log(document.body.scrollLeft);

    $rippleEffect.style.top = top + 'px';
    $rippleEffect.style.left = left + 'px';
    $rippleEffect.classList.add('show');    // show class 추가
  }

  render() {
    const { type, text, color, styles } = this.props
    const currColor = colors[color]
    console.log(currColor)
    const style = {
      border: `1px solid ${currColor ? currColor : 'black'}`,
      border:'rgba(0, 0, 0, 0.87)',
      boxShadow:'0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
      padding: '16px 24px',
      fontSize: '14px',
      backgroundColor:'#f5f5f5',
      color:'#777',
      position: 'relative',
      overflow:'hidden',
      outline:'none',

      //backgroundColor: `${currColor ? currColor : '#FAFAFA'}`,
      //color: `${currColor ? currColor : '#9E9E9E'}`,
      cursor: 'pointer',
      ...currColor
    }
    if (type === 'one') {
      style.borderRadius = '7px'
    }
    return (
      <button style={style} onClick={this._rippleBtn}>{text}</button>
    )
  }
}

export default Button