"use client"

import React, { useEffect, useState } from 'react'
import Header from '@/app/components/Header'
import Dashboard from '@/app/components/Dashboard'
import Footer from '@/app/components/Footer'
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

    if (!isLogged) window.location.href = "/"

    return(
        <>
            <Header />
            <Dashboard />
            <Footer />
        </>
    )
}

export default page
