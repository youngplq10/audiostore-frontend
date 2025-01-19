"use client"

import { Alert, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";
import { audiobook } from '../interfaces/interfaces';
import axios from 'axios';
import Loading from './Loading';
import { removeSpaces } from '../scripts/removeSpaces';

const MostTrending = () => {
    const [mostTrending, setMostTrending] = useState<audiobook[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobooks")
            .then(response => {
                setMostTrending(response.data.slice(0, 5))
                setLoading(false)
            }).catch(e => console.log(e))
    }, [])

    if (loading) return <Loading />

    return(
        <>
            <div className='container-lg pt-5 most-trending'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <Typography variant='h2'>#Most trending</Typography>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                    { mostTrending.map((audiobook, audiobookIndex) => {
                        return(
                            <div className="col-4 col-md-2 text-center mt-2" key={audiobookIndex}>
                                <a
                                    href={"/audiobook?title=" + removeSpaces(audiobook.title)}
                                    className="text-decoration-none"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >

                                    <Image
                                        src={process.env.NEXT_PUBLIC_RESOURCES +  audiobook.coverLink}
                                        width={100}
                                        height={100}
                                        className='rounded-circle'
                                        alt=''
                                    />
                                    <Typography variant='body1'> { audiobook.title } </Typography>
                                    <Typography variant='subtitle1'> { audiobook.author } </Typography>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MostTrending
