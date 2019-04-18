import React from 'react';
import { Card, FlexContainer } from 'sapa-ui/dist/index';
import Header from './Header'


const ulContainer = {
  backgroundColor: '#eee',
  padding: '15px 100px',
  color: '#123456'
}

const liContainer = {
  margin: '1em'
}

const h1Style = {
  fontSize: '32px',
  margin: '1em'
}

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

const CardPage = props => (
  <FlexContainer>
    <Header />
    <ul style={ulContainer}>
      <li style={liContainer}>
        <h1 style={h1Style}>Card</h1>
        <div style={cardContainerStyle}>
          {
            [1,2,3,4,5,6,7,8,9].map(data => {
              return <Card key={data} />
            })
          }
        </div>
      </li>
    </ul>
  </FlexContainer>
)

export default CardPage