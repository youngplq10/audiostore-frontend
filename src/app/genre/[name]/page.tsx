import Category from '@/app/components/Category'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'

const page = ({ name }: { name: string }) => {
    return(
        <>
            <Header />
            <Category name={name} />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
