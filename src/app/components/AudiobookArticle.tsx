"use client"

import { Alert, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { removeSpaces } from '../scripts/removeSpaces'
import Image from "next/image"
import { audiobook } from '../interfaces/interfaces'
import axios from 'axios'
import Loading from './Loading'
import { useSearchParams } from 'next/navigation'

const AudiobookArticle = () => {

    const [username, setUsername] = useState<string | null>(null);
    
    useEffect(() => {
        const storedUsername = sessionStorage.getItem("username");
        setUsername(storedUsername);
    }, []);

    const params = useSearchParams();
    
    const title = params.get("title") ? decodeURIComponent(params.get("title")!) : '';
    
    const [audiobook, setAudiobook] = useState<audiobook>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobook/" + title)
            .then(response => {
                setAudiobook(response.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [title])

    if(loading) return <Loading />

    return(
        <>
            <article className="container-lg py-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-auto order-lg-2 mt-2">
                        <Image
                            src={"http://localhost:8080" + audiobook?.coverLink}
                            width={300}
                            height={400}
                            className="rounded-4"
                            alt="romeo and juliet"
                        />
                    </div>
                    <div className="col-10 col-lg-6 bd-dark mt-2">
                        <div className="row mt-2">
                            <div className="col-12">
                                <Typography variant="h2"> { audiobook?.title } </Typography>
                                <Typography variant="body1">
                                    { audiobook?.description }
                                </Typography>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 ">
                                { username == undefined ? (
                                    <a href='/login'>
                                        <Button variant="contained" sx={{ textTransform: "none"}} size="large">
                                            Login to listen for free
                                        </Button>
                                    </a>
                                ) : (
                                    <>
                                        <audio controls style={{ backgroundColor: "#7D49CA", borderRadius: 10, width: "100%" }}>
                                            <source src={"http://localhost:8080" + audiobook?.audioLink} type="audio/mpeg" />
                                        </audio>
                                        <Button variant='contained'>Save to library</Button>
                                    </>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default AudiobookArticle
