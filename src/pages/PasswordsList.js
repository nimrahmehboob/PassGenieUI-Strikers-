import { useState } from 'react';
import { DashboardLayout } from '../components/dashboard-layout';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PasswordList = () => {
  const [passwords, setPasswords] = useState([
    { id: 1, name: 'whatsapp', url: 'https://web.whatsapp.com/', password: 'abc123' },
    { id: 2, name: 'Facebook', url: 'https://www.facebook.com/', password: 'def456' },
    { id: 3, name: 'Instagram', url: 'https://www.instagram.com/', password: 'ghi789' },
    { id: 4, name: 'LMS', url: 'https://mis.kiet.edu.pk/', password: 'ghi789' },
    { id: 5, name: 'LinkedIn', url: 'https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit', password: 'ghi789' },
    { id: 6, name: 'Last Pass', url: 'https://www.instagram.com/', password: 'ghi789' },
    { id: 7, name: 'Canva', url: 'https://www.instagram.com/', password: 'ghi789' },
    { id: 8, name: 'Story Set', url: 'https://www.instagram.com/', password: 'ghi789' },
    { id: 9, name: 'Icons8', url: 'https://www.instagram.com/', password: 'ghi789' },
    { id: 0, name: 'Telegram', url: 'https://www.instagram.com/', password: 'ghi789' },
   
  ]);

  const randomLinearGradient = () => {
    /////
    const colors = ['#7575ff', '#99ccff', ' #ff66ff', '#99bbff', '#e0b3ff', '#df9fdf', '#d279a6'];
    const rand1 = Math.floor(Math.random() * colors.length);
    let rand2 = Math.floor(Math.random() * colors.length);
    while (rand2 === rand1) {
      rand2 = Math.floor(Math.random() * colors.length);
    }
    return `linear-gradient(to bottom, ${colors[rand1]}, ${colors[rand2]})`;
  };

  const CustomBox6 = ({ children }) => (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '18px',
        padding: '16px',
        color: '#333',
        height: '100%',
        backgroundImage: randomLinearGradient(),
        margin: '16px',
        marginTop: '20px',
        marginBottom: '50px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
  const StyledButton = styled(Button)({
    marginTop: '20px',
    height: '50px',
    width: '150px',
    backgroundImage: 'linear-gradient(to right, #b800e6, #b800e6)',
    color: '#fff',

  });

  const StyledButton1 = styled(Button)({
    marginTop: '20px',
    height: '50px',
    width: '250px',
    backgroundImage: 'linear-gradient(to right, #b800e6, #b800e6)',
    color: '#fff',

  });

  const [showPasswordId, setShowPasswordId] = useState(null);

  const showPassword = (id) => {
    setShowPasswordId(id);
  };

  const hidePassword = () => {
    setShowPasswordId(null);
  };

  const launchUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box   style={{
      display: 'flex',
      height:'100%',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
  
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >

      <Box style={{ width: '100%', textAlign: 'center', marginTop: '50px', marginBottom: '10px' }}>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginBottom: '30px' }}>
  <Typography variant="h4" gutterBottom>
    Password List
  </Typography>
  <StyledButton1 variant="contained" color="primary">
    Add New Password
  </StyledButton1>
</Box>
      </Box>

      {passwords.map((password) => (
        <Box key={password.id} style={{ marginTop: '30px' }}>
          <CustomBox6>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                borderBottom: '2px solid #ccc',
                paddingBottom: '5px'
              }}
            >
              {password.name}
            </Typography>

            <StyledButton variant="contained" onClick={() => launchUrl(password.url)} style={{ marginBottom: '10px' }}>
              Launch
            </StyledButton>
            {showPasswordId === password.id ? (
              <Typography variant="h6" gutterBottom style={{ marginBottom: '10px' }}>
                {password.password}
              </Typography>
            ) : (
              <StyledButton variant="contained" onClick={() => showPassword(password.id)} style={{ marginBottom: '10px' }}>
                Show Password
              </StyledButton>
            )}
            {showPasswordId === password.id && (
              <StyledButton variant="contained" onClick={() => hidePassword()} style={{ marginBottom: '10px' }}>
                Hide Password
              </StyledButton>
            )}
          </CustomBox6>
        </Box>
      ))}
    </Box>
  );
};

PasswordList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default PasswordList;
