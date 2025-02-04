"use client"

import AudiobookArticle from '@/app/components/AudiobookArticle'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React, { useEffect, useState } from 'react'
import Reviews from '@/app/components/Reviews'
import NewReviewForm from '@/app/components/NewReviewForm'
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
    
    return(
        <>
            <Header />
            <AudiobookArticle />
            <Reviews />
            { isLogged ? (
                <NewReviewForm />
            ) : (
                <></>
            ) }
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
