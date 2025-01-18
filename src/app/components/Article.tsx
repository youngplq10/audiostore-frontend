"use client"

import { Alert, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";
import { audiobook } from '../interfaces/interfaces';
import axios from 'axios';
import Loading from './Loading';
import { removeSpaces } from '../hooks/removeSpaces';

const Article = ({homepage} : {homepage: boolean}) => {
    const [topAudiobook, setTopAudiobook] = useState<audiobook>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/audiobook/1984")
            .then(response => {
                setTopAudiobook(response.data)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading />

    return (
        <>
            <article className="container-lg py-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-auto order-lg-2 mt-2">
                        <Alert 
                            icon={<WhatshotIcon fontSize="inherit" />} 
                            severity="info" 
                            className="mb-3 d-lg-none" // Visible only on smaller screens
                        >
                            Top 1
                        </Alert>
                        <Image
                            src={"http://localhost:8080" + topAudiobook?.coverLink}
                            width={300}
                            height={400}
                            className="rounded-4"
                            alt="romeo and juliet"
                        />
                    </div>
                    <div className="col-10 col-lg-6 bd-dark mt-2">
                        <div className="row d-none d-lg-flex mb-2">
                            <div className="col-auto">
                                { homepage ? (
                                    <Alert icon={<WhatshotIcon fontSize="inherit" />} severity="info">
                                    Top 1
                                </Alert>
                                ) : (
                                    <>
                                        
                                    </>
                                ) }
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <Typography variant="h2"> { topAudiobook?.title } </Typography>
                                <Typography variant="body1">
                                    { topAudiobook?.description }
                                </Typography>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                { homepage ? (
                                    <>
                                        <Button variant="contained" href={ "/audiobook/" + removeSpaces(topAudiobook?.title || "") }>Listen now</Button>
                                        <Button variant="outlined" className="ms-2" href='/genres'>Find more</Button>
                                    </>
                                ): (
                                    <>
                                        <audio controls src="/media/cc0-audio/t-rex-roar.mp3" className='rounded audio-control'></audio>
                                    </>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Article;
