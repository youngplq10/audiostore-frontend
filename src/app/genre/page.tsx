import Category from '@/app/components/Category'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'
import SingleCategory from '../components/SingleCategory'

const page = ({ name }: { name: string }) => {
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
