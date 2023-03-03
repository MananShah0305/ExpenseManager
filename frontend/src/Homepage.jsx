import React from 'react'
import Navbar from './Navbar.jsx';
import Dashboard from './Dashboard.jsx';
import Settings from './Settings.jsx';
import {tab} from './Navbar.jsx'

export default function Homepage() {

    return (
        <div>
            <Navbar></Navbar>
            {
                tab=='dashboard'?<Dashboard></Dashboard>:<Settings></Settings>
            }
        </div>
    )
}
