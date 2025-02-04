"use client"

import { Alert, Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import { audiobook } from '@/app/interfaces/interfaces';
import { removeSpaces } from '@/app/scripts/removeSpaces';
import { getTopAudiobook } from '@/app/scripts/APICalls';

const Article = () => {
    const [topAudiobook, setTopAudiobook] = useState<audiobook>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopAudiobook = async () => {
            const res = await getTopAudiobook();
            setTopAudiobook(res)
            setLoading(false)
        }

        fetchTopAudiobook();
    }, [])

    if (process.env.NEXT_PUBLIC_RESOURCES == undefined) return <></>

    return (
        <>
            <article className="container-lg py-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-auto order-lg-2 mt-2">
                        <Alert 
                            icon={<WhatshotIcon fontSize="inherit" />} 
                            severity="info" 
                            className="mb-3 d-lg-none"
                        >
                            Top 1
                        </Alert>
                        {
                            loading ? (
                                <Box
                                    width={300}
                                    height={400}
                                    className="rounded-4 gradient"
                                ></Box>
                            ) : (
                                <Image
                                    src={process.env.NEXT_PUBLIC_RESOURCES + topAudiobook?.coverLink}
                                    width={300}
                                    height={400}
                                    className="rounded-4"
                                    alt="audiobook cover"
                                    priority={true}
                                />
                            )
                        }
                    </div>
                    <div className="col-10 col-lg-6 bd-dark mt-2">
                        <div className="row d-none d-lg-flex mb-2">
                            <div className="col-auto">
                                <Alert icon={<WhatshotIcon fontSize="inherit" />} severity="info">
                                    Top 1
                                </Alert>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                { loading ? (
                                    <div style={{ width: "100%", height: "40px", marginBottom: "10px" }} className='gradient'></div>
                                ) : (
                                    <Typography variant="h2"> { topAudiobook?.title } </Typography>
                                ) }
                                
                                { loading ? (
                                    <div style={{ width: "100%", height: "150px" }} className='gradient'></div>
                                ) : (
                                    <Typography variant='body1'> { topAudiobook?.description } </Typography>
                                ) }
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                { loading ? (
                                    <div style={{ width: "30%", height: "40px" }} className='gradient'></div>
                                ) : (
                                    <>
                                        <Button variant="contained" href={ "/audiobook?title=" + removeSpaces(topAudiobook?.title || "") }>Listen now</Button>
                                        <Button variant="outlined" className="ms-2" href='/genres'>Find more</Button>
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
