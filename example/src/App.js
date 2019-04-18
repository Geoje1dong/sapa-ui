import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import 'reset-css';

import HomePage from './Home'
import ButtonPage from './Button'

export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/button" component={ButtonPage} />
      </Switch>
    )
  }
}
