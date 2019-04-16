import React from 'react'
import cardStyles from './card.css'
import Button from './button'

const h1Style = {
  margin: '1em'
}

export default class Card extends React.Component {
  render() {
    return (
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.cardHeader}>
        </div>
        <div className={cardStyles.cardContent}>
          <h1 style={h1Style}>Card Component</h1>
          <div>
            <Button effect="ripple" styles="default" color="primary" text='Button Primary' />
            <span>{' '}</span>
            <Button effect="ripple" styles="default" color="secondary" text='Button Secondary' />
          </div>
        </div>
      </div>
    )
  }
}