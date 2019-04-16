import React, { Component } from 'react'
import {ExampleComponent,Button} from 'sapa-ui/dist/index'
import 'reset-css';

export default class App extends Component {
  render () {
    return (
      <ul>
        <li>
          <h1>Buttons</h1>
          <div className="section">
            <Button effect="ripple" styles="default" text='Button Default' />
            <Button effect="ripple" styles="default" color="primary" text='Button Primary' />
            <Button effect="ripple" styles="default" color="secondary" text='Button Secondary' />
            <Button effect="ripple" styles="default" color="danger" text='Button Danger' />
            <Button effect="ripple" styles="default" text='Button Disabled'/>
          </div>
          <div className="section">
            <Button styles="textBtn" text='Button Default' />
            <Button styles="textBtn" color="primary" text='Button Primary' />
            <Button styles="textBtn" color="secondary" text='Button Secondary' />
            <Button styles="textBtn" color="danger" text='Button Danger' />
            <Button  styles="textBtn" text='Button Disabled'/>
          </div>
          <ul>
            <li></li>

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
