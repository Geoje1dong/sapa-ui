import React, { Component } from 'react'

import {ExampleComponent,Button} from 'sapa-ui/dist/index'

export default class App extends Component {
  render () {
    return (
      <ul>
        <li>
          <h1>Buttons</h1>
          <ul>
            <li><Button type="nemo" color="red" text='Red Button Nemo' /></li>
            <li><Button type="nemo" color="green" text='Green Button Nemo' /></li>
            <li><Button type="nemo" color="blue" text='Blue Button Nemo' /></li>
            <li><Button type="one" color="red" text='Red Button One' /></li>
            <li><Button type="one" color="green" text='Green Button One' /></li>
            <li><Button type="one" color="blue" text='Blue Button One' /></li>
          </ul>
        </li>
        <li>
          <h1>Headings</h1>
          <ul>
            <li><ExampleComponent text='Modern React component module' /></li>
            <li><ExampleComponent text='Modern React component module' /></li>
            <li><ExampleComponent text='Modern React component module' /></li>
          </ul>
        </li>
      </ul>
    )
  }
}
