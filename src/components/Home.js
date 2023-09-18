import React, { useState } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../redux/reducers/AuthSlice';
import Header from './Header';


function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState(''); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));
  
    if (userData) {
      // Extract username and password from userData
      const { username: savedUsername, password: savedPassword } = userData;
  
      // Check if the entered username and password match the saved data
      if (username === savedUsername && password === savedPassword) {
        // Successful login, navigate to the next page
        
        navigate('/ProductListing');
      } else {
        // Invalid credentials, show an error message
        window.alert('Invalid username or password');
      }
    } 
  };
  

  const handleSignup = () => {
    
    setIsSignupModalOpen(true)
  
  };
  const registerData =()=>{
   
      // Dispatch the registerUser action
      dispatch(registerUser({ username, password, email }));
    
      // Store the user data in local storage
      const userData = { username, email, password };
      localStorage.setItem('user', JSON.stringify(userData));
    
      // Close the Signup modal
      setIsSignupModalOpen(false);
    
    
  }
  

  function handleCloseModal() {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setError('');
    setUsername('');
    setPassword('');
    setEmail('');
  }

  return (
    <>
    <Header isHomepage={true}/>
    <div className='home'>
      <div className='home_btns'>
        <button className='loginbtn' onClick={()=>{setIsLoginModalOpen(true);}}>Login</button>
        <button className='signupbtn' onClick={handleSignup}>Signup</button>
      </div>

      {/* Login Modal */}
      <Modal
        open={isLoginModalOpen}
        onClose={handleCloseModal}
        aria-labelledby='login-modal-title'
        aria-describedby='login-modal-description'
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <div className='modal_header'>
          <Typography id='login-modal-title' variant='h6' component='h2'>
            Login
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleCloseModal}>
              X
            </Button>
            </div>
          <TextField
            id="login-username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username} // Add value and onChange
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="login-password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type='password'
            value={password} // Add value and onChange
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='modal_btn'>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          </div>
         

        </Box>
      </Modal>

      {/* Signup Modal */}
      <Modal
        open={isSignupModalOpen}
        onClose={handleCloseModal}
        aria-labelledby='signup-modal-title'
        aria-describedby='signup-modal-description'
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <div className='modal_header'>
          <Typography id='signup-modal-title' variant='h6' component='h2'>
            Signup
          </Typography>
          <Button variant="outlined" color="primary" onClick={handleCloseModal}>
              X
            </Button>
            </div>
          <TextField
            id="signup-username"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type='email'
            value={email} // Add value and onChange
            onChange={(e) => setEmail(e.target.value)}

          />
          <TextField
            id="signup-username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username} // Add value and onChange
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="signup-username"
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type='password'
            value={password} // Add value and onChange
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='modal_btn'>
          <Button variant="contained" color="primary" onClick={registerData}>
            Signup
          </Button>
          </div>
        </Box>
      </Modal>
    </div>
    </>
  );
}

export default Home;
