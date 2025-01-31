"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/app/components/Header'
import LogoutConfirmation from '@/app/components/LogoutConfirmation'
import { getIsAuthenticated } from '@/app/scripts/Server'

const page = () => {
    const [isLogged, setIsLogged] = useState(true);
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await getIsAuthenticated();
                setIsLogged(authStatus);
            } catch (error) {
                setIsLogged(false);
            }
        };
        checkAuth();
    }, []);

    if (!isLogged) window.location.href = "/login"

    return (
        <div className='container-lg'>
            <Header />
            <LogoutConfirmation />
        </div>
    )
}

export default page
