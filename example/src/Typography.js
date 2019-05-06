import React from 'react';
import {
  Typography
} from 'sapa-ui/dist/index';
import Header from './Header';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

const TypographyPage = props => (
  <div style={styles.root}>
    <Header />
    <Typography variant="h1">
      h1. Heading
    </Typography>
    <Typography variant="h2">
      h2. Heading
    </Typography>
    <Typography variant="h3">
      h3. Heading
    </Typography>
    <Typography variant="h4">
      h4. Heading
    </Typography>
    <Typography variant="h5">
      h5. Heading
    </Typography>
    <Typography variant="h6">
      h6. Heading
    </Typography>
  </div>
)

export default TypographyPage