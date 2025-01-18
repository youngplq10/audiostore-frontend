"use client";

import { Container, Typography, TextField, Button, Link, SpeedDial, Avatar, SpeedDialAction } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Cookies from 'universal-cookie';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem("username");
        setUsername(storedUsername);
    }, []);

    return (
        <header className="container-lg py-4 header">
            <div className="row align-items-center">
                <div className="col-5">
                    <a style={{ display: 'inline-flex', alignItems: 'center' }} href='/' className='text-decoration-none'>
                        <HeadphonesIcon className='me-2' sx={{ color: "#000" }} />
                        <Typography variant="h4" sx={{ color: "#7C7C7C" }}>Audio</Typography>
                        <Typography variant='h4' sx={{ color: "#000" }}>Store</Typography>
                    </a>
                </div>
                <div className="col-7" style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <TextField id="search" label="Search" variant="outlined" size="small" />
                        
                            { username == null ? (
                                <a href='/login'>
                                    <Button variant="contained" sx={{ textTransform: "none", marginLeft: 2 }} size="large">
                                        Login
                                    </Button>
                                </a>
                            ) : (
                                <>
                                    <a href='/dashboard'>
                                        <Button variant="contained" sx={{ textTransform: "none", marginLeft: 2 }} size="large">
                                            Dashboard
                                        </Button>
                                    </a>
                                </>
                            ) }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
