"use client"

import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { audiobook } from '@/app/interfaces/interfaces'
import { useSearchParams } from 'next/navigation'
import { getIsAuthenticated } from '@/app/scripts/Server'
import { getAudiobook, getUserData, saveAudiobook, unSaveAudiobook } from '@/app/scripts/APICalls'
import { removeSpaces } from '@/app/scripts/removeSpaces'

const AudiobookArticle = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [audiobook, setAudiobook] = useState<audiobook>();
    const [loading, setLoading] = useState(true);
    const [loadingAuthStatus, setLoadingAuthStatus] = useState(true);
    const [loadingIsSavedStatus, setLoadingIsSavedStatus] = useState(true);

    const [saved, setSaved] = useState(false)

    useEffect(() => {
        if (loading != true) {
            const fetchUser = async () => {
                const res = await getUserData();

                for (let i=0; i<res.likedAudiobooks.length;i++) {
                    if (removeSpaces(res.likedAudiobooks[i].title) == title) {
                        setSaved(true)
                    }
                }

                setLoadingIsSavedStatus(false);
            }
            fetchUser()
        }
    }, [audiobook])

    const handleSaveButton = async () => {
        if (saved) {
            setSaved(!saved);
            unSaveAudiobook(title);
        }
        if (!saved) {
            setSaved(!saved);
            saveAudiobook(title);
        }
    }
    
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await getIsAuthenticated();
                setIsLogged(authStatus);
                setLoadingAuthStatus(false)
            } catch (error) {
                setIsLogged(false);
                setLoadingAuthStatus(false)
            }
        };
        checkAuth();
    }, []);

    const params = useSearchParams();
    
    const title = params.get("title") ? decodeURIComponent(params.get("title")!) : '';
    
    useEffect(() => {
        const fetchAudiobook = async () => {
            const res = await getAudiobook(title);
            setAudiobook(res)
            setLoading(false)
        } 
        fetchAudiobook()
    }, [title])

    if (process.env.NEXT_PUBLIC_RESOURCES == undefined) return <></>

    return(
        <>
            <article className="container-lg py-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-auto order-lg-2 mt-2">
                        {
                            loading ? (
                                <Box
                                    width={300}
                                    height={400}
                                    className="rounded-4 gradient"
                                ></Box>
                            ) : (
                                <Image
                                    src={process.env.NEXT_PUBLIC_RESOURCES + audiobook?.coverLink}
                                    width={300}
                                    height={400}
                                    className="rounded-4"
                                    alt="audiobook cover"
                                />
                            )
                        }
                    </div>
                    <div className="col-10 col-lg-6 bd-dark mt-2">
                        <div className="row mt-2">
                            <div className="col-12">
                                { loading ? (
                                    <div style={{ width: "100%", height: "40px", marginBottom: "10px" }} className='gradient'></div>
                                ) : (
                                    <Typography variant="h2"> { audiobook?.title } </Typography>
                                ) }
                                
                                { loading ? (
                                    <div style={{ width: "100%", height: "150px" }} className='gradient'></div>
                                ) : (
                                    <Typography variant='body1'> { audiobook?.description } </Typography>
                                ) }
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 ">
                                { loading || loadingAuthStatus || loadingIsSavedStatus ? (
                                    <div style={{ width: "100%", height: "40px", marginBottom: "10px" }} className='gradient'></div>
                                ) : (
                                     isLogged ? (
                                        !saved ? (
                                            <>
                                                <audio controls style={{ backgroundColor: "#7D49CA", borderRadius: 10, width: "100%" }}>
                                                    <source src={process.env.NEXT_PUBLIC_RESOURCES + audiobook?.audioLink} type="audio/mpeg" />
                                                </audio>
                                                <Button variant='contained' onClick={handleSaveButton}>Save to library</Button>
                                            </>
                                        ) : (
                                            <>
                                                <audio controls style={{ backgroundColor: "#7D49CA", borderRadius: 10, width: "100%" }}>
                                                    <source src={process.env.NEXT_PUBLIC_RESOURCES + audiobook?.audioLink} type="audio/mpeg" />
                                                </audio>
                                                <Button variant='contained' onClick={handleSaveButton}>Remove from library</Button>
                                            </>
                                        )
                                    ) : (
                                        <a href='/login'>
                                            <Button variant="contained" sx={{ textTransform: "none"}} size="large">
                                                Login to listen for free
                                            </Button>
                                        </a>
                                    )
                                    
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
