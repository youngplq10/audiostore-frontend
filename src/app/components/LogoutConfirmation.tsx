"use client"

import { Button, Typography } from '@mui/material'
import React from 'react'
import { logout } from '../scripts/Server'

const LogoutConfirmation = () => {
    const handleLogout = () => {
        logout();
        window.location.href = "/";
    }

    return (
        <div className='row justify-content-center mt-5 pt-5'>
            <div className="col-6 pt-5 mt-5 text-center">
                <Typography variant='h4'>Are you sure you want to log out?</Typography>
                <Button onClick={handleLogout} variant='contained' className='mt-3'>Logout</Button>
            </div>
        </div>
    )
}

export default LogoutConfirmation
