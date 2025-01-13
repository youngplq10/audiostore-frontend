"use client"

import { Alert, Typography } from '@mui/material'
import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";

const MostTrending = () => {
    return(
        <>
            <div className='container-lg pt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <Typography variant='h2'>#Most trending</Typography>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                    <div className="col-4 col-md-2 text-center mt-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={100}
                            height={100}
                            className='rounded-circle'
                            alt=''
                        />
                        <Typography variant='body1'>Echoes of Tomorrow</Typography>
                        <Typography variant='subtitle1'>Elena R Cross</Typography>
                    </div>
                    <div className="col-4 col-md-2 text-center mt-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={100}
                            height={100}
                            className='rounded-circle'
                            alt=''
                        />
                        <Typography variant='body1'>Echoes of Tomorrow</Typography>
                        <Typography variant='subtitle1'>Elena R Cross</Typography>
                    </div>
                    <div className="col-4 col-md-2 text-center mt-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={100}
                            height={100}
                            className='rounded-circle'
                            alt=''
                        />
                        <Typography variant='body1'>Echoes of Tomorrow</Typography>
                        <Typography variant='subtitle1'>Elena R Cross</Typography>
                    </div>
                    <div className="col-4 col-md-2 text-center mt-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={100}
                            height={100}
                            className='rounded-circle'
                            alt=''
                        />
                        <Typography variant='body1'>Echoes of Tomorrow</Typography>
                        <Typography variant='subtitle1'>Elena R Cross</Typography>
                    </div>
                    <div className="col-4 col-md-2 text-center mt-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={100}
                            height={100}
                            className='rounded-circle'
                            alt=''
                        />
                        <Typography variant='body1'>Echoes of Tomorrow</Typography>
                        <Typography variant='subtitle1'>Elena R Cross</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostTrending
