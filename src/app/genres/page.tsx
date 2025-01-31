import React from 'react'
import Header from '@/app/components/Header'
import Category from '@/app/components/Category'
import MobileAppAd from '@/app/components/MobileAppAd'
import Footer from '@/app/components/Footer'

const page = () => {
    return(
        <>
            <Header />
            <Category numberOfGenres={10} />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
