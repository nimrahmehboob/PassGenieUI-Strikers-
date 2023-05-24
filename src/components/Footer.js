import React from 'react';
import { Container, Typography } from '@material-ui/core';

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#fff', marginTop: '50px', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', '@media (min-width:600px)': {flexDirection: 'row'} }}>
          <Typography variant="body2" color="textSecondary" style={{marginBottom: '10px', textAlign: 'center', '@media (min-width:600px)': {textAlign: 'left', marginRight: '30px'}}}>
            © {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{textAlign: 'center', '@media (min-width:600px)': {textAlign: 'right'}}}>
            Made with ❤️ by John Doe
          </Typography>
        </footer>
      </Container>
    </div>
  );
}
