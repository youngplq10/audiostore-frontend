import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'
import SingleCategory from '@/app/components/SingleCategory'

const page = () => {
    return(
        <>
            <Header />
            <SingleCategory />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
