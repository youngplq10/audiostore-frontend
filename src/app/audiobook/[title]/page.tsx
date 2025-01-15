import Article from '@/app/components/Article'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'

const page = () => {
    return(
        <>
            <Header />
            <Article homepage={false} />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
