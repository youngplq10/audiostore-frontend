"use client"

import React, { useEffect, useState } from 'react'
import LoginUI from '@/app/components/LoginUI'
import Header from '@/app/components/Header'
import { getIsAuthenticated } from '@/app/scripts/Server'

const page = () => {
    const [isLogged, setIsLogged] = useState(false);
    
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

    if (isLogged) window.location.href = "/"

    return(
        <>
            <Header />
            <LoginUI />
        </>
    )
}

export default page
