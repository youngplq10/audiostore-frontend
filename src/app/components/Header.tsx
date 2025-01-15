"use client";

import { Container, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { redirect } from 'next/navigation';

const Header = () => {
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
                        <Button variant="contained" sx={{ textTransform: "none", marginLeft: 2 }} size="large">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
