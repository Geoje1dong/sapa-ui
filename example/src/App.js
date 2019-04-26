import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import 'reset-css';

import HomePage from './Home'
import ButtonPage from './Button'
import CardPage from './Card'
import LayoutPage from './Layout'
import ModalPage from './Modal'

export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/card" component={CardPage} />
        <Route path="/layout" component={LayoutPage} />
        <Route path="/modal" component={ModalPage} />
      </Switch>
    )
  }
}
