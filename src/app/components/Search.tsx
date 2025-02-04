"use client"

import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { audiobook } from '@/app/interfaces/interfaces'
import { searchAudiobooks } from '@/app/scripts/APICalls'
import { removeSpaces } from '../scripts/removeSpaces'
import StarIcon from '@mui/icons-material/Star';

const Search = () => {
    const [loading, setLoading] = useState(true);
    const [audiobooks, setAudiobooks] = useState<audiobook[]>([]);

    const params = useSearchParams();
    
    const query = params.get("q") ? decodeURIComponent(params.get("q")!) : '';

    useEffect(() => {
        const fetchQuery = async () => {
            const res = await searchAudiobooks(query);

            setAudiobooks(res);
            setLoading(false);
        }
        fetchQuery();
    }, [query])

    return(
        <>
            <div className='container-lg py-5'>
                { loading ? (
                    <div style={{ width: "100%", height: "250px", marginBottom: "10px" }} className='gradient'></div>
                ) : (
                    <>
                        <div className="row justify-content-center mt-2">    
                                { audiobooks.length === 0 ? (
                                    <div className="col-10 text-center"><Typography variant='h3'>Nothing found</Typography></div>
                                ) : (
                                    audiobooks.map((audiobook, audiobook_index) => {
                                        let stars = 0;
                                        let howManyReviews = 0;
                                        audiobook.reviews.map((review) => {
                                            stars += review.stars;
                                            howManyReviews++;
                                        })
    
                                        return(
                                            <div className="col-auto my-2" key={audiobook_index}>
                                                <a
                                                    href={"/audiobook?title=" + removeSpaces(audiobook.title)}
                                                    className="text-decoration-none"
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                    <Image
                                                        src={process.env.NEXT_PUBLIC_RESOURCES + audiobook.coverLink}
                                                        width={250}
                                                        height={350}
                                                        className="rounded-4"
                                                        alt={audiobook.title}
                                                    />
                                                    <Typography variant="body1" className="ms-1">
                                                        {audiobook.title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" className="ms-1">
                                                        {audiobook.author}
                                                    </Typography>
                                                    <Box display="flex" alignItems="center">
                                                        <StarIcon sx={{ marginRight: 0.5 }} />
                                                        <Typography variant="body1"> { 
                                                            stars === 0 ? (
                                                                "-"
                                                            ) : (
                                                                (Math.round((stars / howManyReviews) * 10) / 10) % 1 !== 0 ? (
                                                                    Math.round((stars / howManyReviews) * 10) / 10
                                                                ) : (
                                                                    Math.round((stars / howManyReviews) * 10) / 10 + ".0"
                                                                )
                                                            )
                                                        } </Typography>
                                                    </Box>
                                                </a>
                                            </div>
                                        )
                                    })
                                ) } 
                                
                        </div>
                    </>
                ) }
            </div>
        </>
    )
}

export default Search
