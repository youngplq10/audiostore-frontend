import AudiobookArticle from '@/app/components/AudiobookArticle'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import MobileAppAd from '@/app/components/MobileAppAd'
import React from 'react'
import Reviews from '@/app/components/Reviews'
import NewReviewForm from '@/app/components/NewReviewForm'

const page = () => {
    return(
        <>
            <Header />
            <AudiobookArticle />
            <Reviews />
            <NewReviewForm />
            <MobileAppAd />
            <Footer />
        </>
    )
}

export default page
