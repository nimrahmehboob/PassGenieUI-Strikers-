import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

export   const Logo = styled(({ variant, ...other }) => {
  const { imageSrc, ...imgProps } = other;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return <img src={imageSrc} alt="Logo" {...imgProps} />;
})``;

Logo.defaultProps = {
  variant: 'primary',
  imageSrc: '/../../../src/images/LogoPassGenie.png',
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary']),
  imageSrc: PropTypes.string,
};

 


// function App() {
//   return (
//     <div>
//       <LogoContainer variant="light"  />
//     </div>
//   );
// }

// export default App;
