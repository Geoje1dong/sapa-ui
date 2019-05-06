import React from 'react';
import styled from 'styled-components'

import {
  Typography
} from 'sapa-ui/dist/index';
import Header from './Header';

const styles = {
  root: {
    width: '100%',
    maxWidth:'500px',
    margin:'0 auto',
    padding:'40px 0'
  },
};

const Cardbox = styled.div`
  font-famil:'sans-serif';
  width:500px;
  padding-bottom:1rem;
  p{
    font-size:12px;
    margin-bottom:1rem;
  }
`

const TypographyPage = props => (
  <div style={styles.root}>
    <Header />
    <Cardbox>
      <p>Header1 48px</p>
      <Typography variant="h1">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
    <Cardbox>
      <p>Header2 36px</p>
      <Typography variant="h2">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
    <Cardbox>
      <p>Header3 32px</p>
      <Typography variant="h3">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
    <Cardbox>
      <p>Header4 28px</p>
      <Typography variant="h4">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
    <Cardbox>
      <p>Header5 24px</p>
      <Typography variant="h5">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
    <Cardbox>
      <p>Header6 20px</p>
      <Typography variant="h6">
        직관 적인 디자인 시스템<br />SAPA UI
      </Typography>
    </Cardbox>
  </div>
)

export default TypographyPage