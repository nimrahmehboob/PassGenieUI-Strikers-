import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomBox6 = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  backgroundImage: 'linear-gradient(to bottom,   #9933ff, #f2f2f2)',

 
  borderRadius: '10px',
  backgroundColor: '#fff',
  minWidth: '300px',
  maxWidth: '600px',
  width: '100%',
  height:'80%',
  margin: '0 auto',
  marginTop: '50px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
});

const StyledButton = styled(Button)({
    marginTop: '20px',
    height: '50px',
    width:'550px',
   
        backgroundImage: 'linear-gradient(to right, #b800e6, #b800e6)',
    color: '#fff',
   
  });
  

const AddPassword = () => {
  const [websiteName, setWebsiteName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [password, setPassword] = useState('');

  const handleWebsiteNameChange = (event) => {
    setWebsiteName(event.target.value);
  };

  const handleWebsiteUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic here
  };
  
  return (
    <Box   style={{
        display: 'flex',
        height:'100%',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        // marginBottom: '30px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1548990602-43cd23ca3d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
    <CustomBox6>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold',color:'#fff', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '2px solid #ccc', paddingBottom: '5px', fontFamily: 'Arial',marginBottom:'50px' }}>
        Create Password
      </Typography>
      
      
      
      <form onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ marginBottom: '10px',color:'#fff' }}>Website Name</Typography>
        <StyledTextField variant="outlined" fullWidth value={websiteName} onChange={handleWebsiteNameChange} InputProps={{ style: { fontFamily: 'Arial' } }} />
        <Typography variant="h6" sx={{ marginBottom: '10px',color:'#fff' }}>Website URL</Typography>
        <StyledTextField  variant="outlined" fullWidth value={websiteUrl} onChange={handleWebsiteUrlChange} InputProps={{ style: { fontFamily: 'Arial' } }} />
        <Typography variant="h6" sx={{ marginBottom: '10px',color:'#fff' }}>Password</Typography>
        <StyledTextField  variant="outlined" fullWidth value={password} onChange={handlePasswordChange} type="password" InputProps={{ style: { fontFamily: 'Arial' } }} />
        <StyledButton variant="contained" type="submit">
          Create
        </StyledButton>
      </form>
    </CustomBox6>
    </Box>
  );
};

AddPassword.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddPassword;
