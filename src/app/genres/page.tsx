import React from 'react'
import Header from '../components/Header'
import Category from '../components/Category'
import MobileAppAd from '../components/MobileAppAd'
import Footer from '../components/Footer'

const page = () => {
    return(
        <>
            <Header />
            <Category name='Science & Fiction' />
            <Category name='Biography' />
            <Category name='Romance' />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
