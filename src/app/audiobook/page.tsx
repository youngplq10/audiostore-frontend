import AudiobookArticle from '@/app/components/AudiobookArticle'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'

const page = () => {
    return(
        <>
            <Header />
            <AudiobookArticle />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
