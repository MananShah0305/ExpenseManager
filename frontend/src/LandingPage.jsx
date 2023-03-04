import React from 'react'
import Button from '@mui/material-next/Button';
import EastIcon from '@mui/icons-material/East';
import Stack from '@mui/material/Stack';
import './LandingPage.css'
import {Link} from 'react-router-dom'

export default function LandingPage() {
    return (
        <div style={{height:'100vh',background:`url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEX++u/GxpXeAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC') center/cover`}}>
            <div style={{ padding: '28px 60px' }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={0}
                >
                    <p className='fontFace1' style={{ fontSize: "36px", fontWeight: 'bold' }}>
                        Expense Tracker
                    </p>
                    <Link to='/login'>
                        <Button color="primary" variant="filled" size="medium" endIcon={<EastIcon />}>
                            Login
                        </Button>
                    </Link>
                </Stack>
            </div>

            <div style={{ margin: '40px 80px' }}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                >
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <p style={{ fontSize: "60px", fontWeight: 'bold' }} className='fontFace2'>
                            The Expense Manager that works for you always
                        </p>
                        <p style={{ fontSize: "36px", fontStyle: 'italic' }} className='fontFace2'>
                            Track all of your expenses here....
                        </p>
                    </Stack>
                    <img src="https://www.spaceo.ca/wp-content/uploads/2020/11/expance_abstract.svg" height="500" width="600" alt="Expense Tracker" />
                </Stack>
            </div>
        </div>
    )
}
