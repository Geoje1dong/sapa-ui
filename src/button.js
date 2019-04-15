import React from 'react'

const colors = {
  red: {
    color: 'red',
    backgroundColor: '#ff5555'
  },
  green: {
    color: 'green',
    backgroundColor: '#55ff55'
  },
  blue: {
    color: 'blue',
    backgroundColor: '#5555ff'
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

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, text, color } = this.props
    const currColor = colors[color]
    const style = {
      ...currColor,
      border: `1px solid ${currColor ? currColor : 'black'}`,
      padding: '7px'
    }
    if (type === 'one') {
      style.borderRadius = '7px'
    }
    return (
      <div>
        <button style={style}>{text}</button>
      </div>
    )
  }
}

export default Button