"use client"

import React, { useEffect, useState } from 'react'
import { getIsAuthenticated } from '@/app/scripts/Server';
import Header from '@/app/components/Header';
import RegisterUI from '@/app/components/RegisterUI';

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
            <RegisterUI />
        </>
    )
}

export default page
