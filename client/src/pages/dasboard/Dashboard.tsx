import React, { useEffect } from 'react'
import { getUser, logout } from '../../API/Auth.api';
import { Box, Button } from '@mui/material';

const Dashboard = () => {
  const stringUser:string | null = localStorage.getItem('user')
  const user:any = JSON.parse(stringUser || '{}');
  const handleGetUser = async () => {
    await getUser();
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  const handleLogout = async () => {
    // Logout
    localStorage.clear();
    window.location.reload();
    await logout();
  };
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Box p={3} sx={{backgroundColor:'white', borderRadius:'10px',display:'flex', justofyContent:'center', flexDirection:'column', alignItems:'center'}}>
        <h1>Welcome to the application {user.username}</h1>
        <Button variant="contained" color="primary" onClick={() => handleLogout()}>Logout</Button>
      </Box>
    </Box>
  )
}

export default Dashboard