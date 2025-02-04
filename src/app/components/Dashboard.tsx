"use client"

import { Typography, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { getUserData } from '@/app/scripts/APICalls';
import { user } from '@/app/interfaces/interfaces';
import { removeSpaces } from '@/app/scripts/removeSpaces';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    const [userData, setUserData] = useState<user>();

    useEffect(() => {
        const fetchLikes = async () => {
            const res = await getUserData();

            setUserData(res)
            setLoading(false)
        }
        fetchLikes()
    }, [])

    if (process.env.NEXT_PUBLIC_RESOURCES == undefined) return <></>

    return(
        <>
            <div className='container-lg py-5'>
                { loading ? (
                    <div style={{ width: "100%", height: "250px", marginBottom: "10px" }} className='gradient'></div>
                ) : (
                    <>
                        <div className='row'>
                            <div className='col-10 col-md-12 text-center'>
                                <Typography variant='h3'>Liked audiobooks</Typography>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-2">          
                            { userData?.likedAudiobooks.map((audiobook, index) => {
                                return (
                                    <div className="col-auto my-2" key={index}>
                                        <Image
                                            src={process.env.NEXT_PUBLIC_RESOURCES + audiobook.coverLink}
                                            width={175}
                                            height={250}
                                            className="rounded-4"
                                            alt=""
                                            priority={true}
                                        />
                                        <Typography variant="subtitle1" className="ms-1"> { audiobook.title } </Typography>
                                        <Typography variant="subtitle2" className="ms-1"> { audiobook.author } </Typography>
                                        <Button variant='outlined' size='small' className='mt-1' href={"/audiobook?title=" + removeSpaces(audiobook.title)}>Continue listening</Button>
                                    </div>
                                )
                            }) }
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}

export default Dashboard
