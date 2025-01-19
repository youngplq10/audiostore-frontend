"use client"

import React, { useEffect, useState } from 'react'
import { genre } from '../interfaces/interfaces';
import axios from 'axios';
import Loading from './Loading';
import { useSearchParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import { removeSpaces } from '../scripts/removeSpaces';

const SingleCategory = () => {
    const params = useSearchParams();

    const genreName = params.get("name") ? decodeURIComponent(params.get("name")!) : '';

    const [genre, setGenre] = useState<genre>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genre/" + genreName)
            .then(response => {
                setGenre(response.data)
                setLoading(false)
            }).catch(e => console.log(e))
    }, [genreName])

    if (loading) return <Loading />

    return(
        <>
            <div className="container-lg mt-5 pt-5 category">
                <div className="row">
                    <div className="col-12 text-center">
                        <Typography variant="h4" sx={{ color: "#000" }}>{ genre?.name }</Typography>
                    </div>
                </div>

                <div className="row mt-2 justify-content-center">
                    {
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
                    }
                </div>
            </div>
        </>
    )
}

export default SingleCategory
