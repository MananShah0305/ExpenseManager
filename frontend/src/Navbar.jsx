import React, { useState, useEffect } from 'react'
import './Navbar.css'

import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from '@mui/material/Tooltip';
import axios from './axios.js'
import { connect } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from './LoginRedux/loginActions.js'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navbar(props) {

    let navigate = useNavigate();
    const [state, setState] = useState({ right: false });
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axios.get('/username')
            .then(res => {
                res.data.allUserInfo.map(user => {
                    if (props.username == user.username) {
                        setUserInfo(user)
                    }
                    return;
                })
            })
            .catch(err => console.log(err))
    }, [])


    const logoutSite = () => {
        props.logoutUser()
        navigate('/login')
    }

    return (
        <div className='navbar'>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
            >
                <p className='fontFace' style={{ fontSize: '30px', marginBottom: '8px', fontWeight: 'bold', width: '80vw' }}>Welcome Manan{userInfo.username}!</p>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={0}
                    width='14vw'
                >
                    <Tooltip title="Home" placement="bottom">
                        <Link to="/dashboard">
                            <IconButton>
                                <HomeOutlinedIcon style={{ fontSize: '33px', color: '#4181f6' }}></HomeOutlinedIcon>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Settings" placement="bottom">
                        <Link to="/settings">
                            <IconButton>
                                <SettingsOutlinedIcon style={{ fontSize: '30px', color: '#4181f6' }}></SettingsOutlinedIcon>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Button variant="contained" endIcon={<LogoutIcon />} onClick={logoutSite}>
                        Logout
                    </Button>
                </Stack>
            </Stack>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Navbar))

