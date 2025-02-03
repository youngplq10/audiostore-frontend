"use client"

import React, { useEffect, useState } from 'react'
import { genre } from '@/app/interfaces/interfaces';
import { useSearchParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import { removeSpaces } from '@/app/scripts/removeSpaces';
import { getSingleCategory } from '@/app/scripts/APICalls';

const SingleCategory = () => {
    const params = useSearchParams();

    const genreName = params.get("name") ? decodeURIComponent(params.get("name")!) : '';

    const [genre, setGenre] = useState<genre>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenre = async () => {
            const res = await getSingleCategory(genreName);
            setGenre(res)
            setLoading(false)
        }
        fetchGenre();
    }, [genreName])

    return(
        <>
            <div className="container-lg mt-5 pt-5 category">
                <div className="row">
                    { loading ? (
                        <div className="col-4 text-center p-0">
                            <div style={{ width: "100%", height: "40px", marginBottom: "10px" }} className='gradient'></div>
                        </div>
                    ) : (
                        <div className="col-12 text-center">
                            <Typography variant="h4" sx={{ color: "#000" }}>{ genre?.name }</Typography>
                        </div>
                    ) }
                </div>

                <div className="row mt-2 justify-content-center">
                    {
                        loading ? (
                            <div style={{ width: "100%", height: "250px", marginBottom: "10px" }} className='gradient'></div>
                        ) : (
                            genre?.audiobooks.map((audiobook, audiobook_index) => {
                                return (
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
                                                    <Typography variant="body1">4.7</Typography>
                                                </Box>
                                            </a>
                                        </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SingleCategory
