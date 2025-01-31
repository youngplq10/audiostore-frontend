"use client"

import { Button, Typography } from '@mui/material'
import React from 'react'
import MobileAppImage from "@/app/assets/mobileAppImage.png";
import Image from 'next/image';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const MobileAppAd = () => {

    return(
        <>
            <div className='container-lg my-5'>
                <div className='row justify-content-center'>
                    <div className='col-10 col-sm-5 my-auto py-2'>
                        <Typography variant='h4'>Your Story Starts Here - Anytime, Anywhere</Typography>
                        <Typography variant='body1' className='mt-2'>Experience the joy of storytelling wherever life takes you. Download the app now and unlock instant access to a vast library of audiobooks that inspire, educate, and entertain.</Typography>
                        <Button variant="outlined" className='mt-3 mx-1' startIcon={<AppleIcon />}>IOS</Button>
                        <Button variant="contained" className="mx-1 mt-3" startIcon={<AndroidIcon />} sx={{ bgcolor: "#26A65B" }}>Android</Button>
                    </div>

                    <div className='col-auto py-2'>
                        <Image 
                            src={MobileAppImage}
                            width={250}
                            height={300}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileAppAd
