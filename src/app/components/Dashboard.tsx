"use client"

import { Typography, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";
import Loading from './Loading';
import { getUserData } from '../scripts/APICalls';
import { user } from '../interfaces/interfaces';
import { getAllCookies } from '../scripts/Server';
import { removeSpaces } from '../scripts/removeSpaces';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    const [userData, setUserData] = useState<user>();

    useEffect(() => {
        const fetchLikes = async () => {
            const res = await getUserData();

            setUserData(res)
            setLoading(false)
            console.log(res)
        }
        fetchLikes()
    }, [])

    if (loading) return <Loading />

    return(
        <>
            <div className='container-lg py-5'>
                <div className='row'>
                    <div className='col-10 col-md-12 text-center'>
                        <Typography variant='h3'>Liked audiobooks</Typography>
                    </div>
                </div>

                <div className="row justify-content-center mt-2 gx-5">          
                    { userData?.likedAudiobooks.map((audiobook, index) => {
                        console.log("http://localhost:8080" + audiobook.coverLink)
                        return (
                            <div className="col-auto my-2" key={index}>
                                <Image
                                    src={"http://localhost:8080" + audiobook.coverLink}
                                    width={175}
                                    height={250}
                                    className="rounded-4"
                                    alt=""
                                />
                                <Typography variant="subtitle1" className="ms-1"> { audiobook.title } </Typography>
                                <Typography variant="subtitle2" className="ms-1"> { audiobook.author } </Typography>
                                <Button variant='outlined' size='small' className='mt-1' href={"/audiobook?title=" + removeSpaces(audiobook.title)}>Continue listening</Button>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </>
    )
}

export default Dashboard
