"use client"

import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { audiobook } from '@/app/interfaces/interfaces';
import { removeSpaces } from '@/app/scripts/removeSpaces';
import { getAudiobooks } from '@/app/scripts/APICalls';

const MostTrending = () => {
    const [mostTrending, setMostTrending] = useState<audiobook[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMostTrending = async () => {
            const res = await getAudiobooks();
            setLoading(false)
            setMostTrending(res.slice(0, 5))
        }
        fetchMostTrending()
    }, [])

    return(
        <>
            <div className='container-lg pt-5 most-trending'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <Typography variant='h2'>#Most trending</Typography>
                    </div>
                </div>
                <div className='row justify-content-center mt-4'>
                    { loading ? (
                        <div style={{ width: "100%", height: "150px", marginBottom: "10px" }} className='gradient'></div>
                    ) : (
                         mostTrending.map((audiobook, audiobookIndex) => {
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
                        })
                    ) }
                </div>
            </div>
        </>
    )
}

export default MostTrending
