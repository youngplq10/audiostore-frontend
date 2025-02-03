"use client";

import { Typography, TextField, Button, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Link from 'next/link';
import { getIsAuthenticated } from '@/app/scripts/Server';
const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [loading ,setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await getIsAuthenticated();
                setIsLogged(authStatus);
                setLoading(false);
            } catch (error) {
                setIsLogged(false);
            }
        };
        checkAuth();
    }, []);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            { loading ? (
                                <div style={{ width: "100%", height: "40px", marginLeft: "10px" }} className='gradient'></div>
                            ) : (
                                 !isLogged ? (
                                    <a href='/login'>
                                        <Button variant="contained" sx={{ textTransform: "none", marginLeft: 2 }} size="large">
                                            Login
                                        </Button>
                                    </a>
                                ) : (
                                    <>                
                                        <Button variant="contained" sx={{ textTransform: "none", marginLeft: 2 }} size="large" id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}>
    
                                            Menu
                                        </Button>
                                        
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                            }}
                                            sx={{ marginTop: "10px" }}
                                        >
                                            <Link href="/dashboard" className='text-decoration-none' style={{ color: "#070609" }}> <MenuItem onClick={handleClose}>Dashboard</MenuItem> </Link>
                                            <Link href="/logout" className='text-decoration-none' style={{ color: "#070609" }}> <MenuItem onClick={handleClose}>Logout</MenuItem> </Link>
                                        </Menu>
                                    </>
                                ) 
                            ) }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
