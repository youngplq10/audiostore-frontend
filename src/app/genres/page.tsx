import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import MobileAppAd from '../components/MobileAppAd'
import Footer from '../components/Footer'

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
