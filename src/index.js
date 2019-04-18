import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import Button from './button'
import Card from './card'
import StyledComponent from './styledComponent'
import FlexContainer from './flexContainer'

class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}

module.exports = {
  ExampleComponent,
  Button,
  Card,
  StyledComponent,
  FlexContainer,
}
