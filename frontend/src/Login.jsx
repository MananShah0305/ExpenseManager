import React, { useState, useEffect } from 'react'
import './Login.css'  
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SweetAlert from 'react-bootstrap-sweetalert'
import axios from './axios'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginUser } from './LoginRedux/loginActions.js'
import { connect } from 'react-redux'
import {Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

let usernameLogin

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const initialRegister = {
  email: '',
  username: '',
  password: ''
}

const initialLogin = {
  username: '',
  password: ''
}

function Login(props) {

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  let navigate = useNavigate();

  const [value, setValue] = useState(0);

  const [showPassword, setShowPassword] = useState(false)

  const [login, setLogin] = useState(initialLogin)

  const [alertStatus, setAlertStatus] = useState(false)

  const [message, setMessage] = useState('')

  const [statusRegister, setStatusRegister] = useState('')

  const [statusLogin, setStatusLogin] = useState('')

  const [alert, setAlert] = useState(null)

  useEffect(() => {
    if (statusRegister == 'error') {
      const getAlert = () => <SweetAlert
        error
        title="Error!"
        onConfirm={onConfirm}
        customButtons={
          <>
            <Button variant="contained" onClick={onConfirm}>OK</Button>
          </>
        }>
        {message}<span>&#128545;</span>.
      </SweetAlert>

      setAlert(getAlert())
    }

    else if (statusRegister == 'success') {
      const getAlert = () => <SweetAlert
        success
        title="Success!"
        onConfirm={onConfirm}
        customButtons={
          <>
            <Button variant="contained" onClick={onConfirm}>OK</Button>
          </>
        }>
        {message}<span>&#128512;</span>.
      </SweetAlert>
      setAlert(getAlert())
    }

  }, [statusRegister])

  useEffect(() => {
    if (statusLogin == 'error') {
      const getAlert = () => <SweetAlert
        error
        title="Error!"
        onConfirm={onConfirm}
        customButtons={
          <>
            <Button variant="contained" onClick={onConfirm}>OK</Button>
          </>
        }>
        {message}<span>&#128545;</span>.
      </SweetAlert>

      setAlert(getAlert())
    }
    else if (statusLogin == 'success') {
      setAlert(null)
      props.loginUser()
      navigate('/')
    }

  }, [statusLogin])

  const onConfirm = () => {
    setAlertStatus(false)
    setMessage("")
    setStatusRegister("")
    setStatusLogin("")
    console.log(value);
    if (value == 1) {
      formik.values.email = initialRegister.email
      formik.values.password = initialRegister.password
      formik.values.username = initialRegister.username
    }
    else {
      console.log(value);
    }

    setLogin(initialLogin)
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  };

  const changeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const validationSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid Email'),
    username: yup.string().required('Username is required').min(6, 'Username must have atleast 6 characters').max(16, 'Username must have atmost 16 characters').matches(/^[a-zA-Z0-9_.]+$/, 'Username should only be composed of letters, numbers, underscore and period.'),
    password: yup.string().required('Password is required').min(8, 'Password must have atleast 8 characters').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'Password should contain atleast one uppercase character, one lowercase character, one digit and one special character.')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: () => {
      const body = {
        email: formik.values.email,
        username: formik.values.username,
        password: formik.values.password,
      }
      axios.post('/signUp', body)
        .then((res) => {
          setAlertStatus(true)
          setMessage(res.data.message)
          setStatusRegister(res.data.status)
        })
        .catch(err => {
          console.log(err);
        })
    },
    validationSchema: validationSchema
  });

  const loginChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const loginSubmit = () => {

    const body = {
      username: login.username,
      password: login.password
    }
    axios.post('/signIn', body)
      .then((res) => {
        usernameLogin = body.username
        setAlertStatus(true)
        setMessage(res.data.message)
        setStatusLogin(res.data.status)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='login' style={{ height: '100vh', background: `URL('https://wallpaper.dog/large/20358703.jpg') center/cover` }}>
      {
        alertStatus && alert
      }
      <Container maxWidth="sm" style={{ height: '58vh', width: '25vw', position: 'relative', top: '20vh' }}>
        <TabContext value={value}>
          <Paper elevation={16} sx={{ borderRadius: '20px', bgcolor: '#FFFFFF', height: '58vh', width: '100%' }}>
            <Tabs centered value={Number(value)} onChange={changeTabs} aria-label="basic tabs example">
              <Tab icon={<LoginIcon />} iconPosition="end" label="Login" {...a11yProps(0)} />
              <Tab icon={<AppRegistrationRoundedIcon />} iconPosition="end" label="Register" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={Number(value)} index={0} style={{ padding: '0px' }}>
              <form onSubmit={formik.handleSubmit} style={{ height: '40vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }} variant='outlined'>

                <TextField
                  name='username'
                  value={login.username}
                  onChange={loginChange}
                  label="Username"
                  variant="outlined"
                  fullWidth />

                <TextField
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  value={login.password}
                  onChange={loginChange}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handlePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }} />

                <p style={{ margin: '-20px 0px 0px -40px', fontSize:'14px'}} ><Button color="primary" size="small">Forgot password?</Button>Change it now</p>

                <Button type='submit' style={{ padding: '10px' }} onClick={loginSubmit} variant="contained" endIcon={<LoginIcon />} fullWidth>
                  Log In
                </Button>

                <p style={{ margin: '0px' }}>Don't have an account? <Chip label="Register Now" color="primary" variant="outlined" size="medium" onClick={() => setValue(1)} /></p>

              </form>
            </TabPanel>

            <TabPanel value={Number(value)} index={1} style={{ padding: '0px' }}>
              <Form onSubmit={formik.handleSubmit} style={{ height: '40vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>

                <TextField
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  label="Email Id"
                  variant="outlined"
                  fullWidth
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />

                <TextField
                  name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                  onBlur={formik.handleBlur} />

                <TextField
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handlePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button type='submit' style={{ padding: '10px' }} variant="contained" endIcon={<AppRegistrationRoundedIcon />} fullWidth>
                  Register
                </Button>
              </Form>
            </TabPanel>
          </Paper>
        </TabContext>
      </Container>
    </div>
  )
}

export {usernameLogin}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch(loginUser())
  }
}

export default connect(null, mapDispatchToProps)(Login)


