"use client"

import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect, useState } from 'react';
import { genre } from '@/app/interfaces/interfaces';
import { removeSpaces } from '@/app/scripts/removeSpaces';
import { getCategory } from '@/app/scripts/APICalls';

const Category = ( { numberOfGenres } : { numberOfGenres: number } ) => {

    if (numberOfGenres == undefined){
        numberOfGenres = 1;
    }

    const [genres, setGenres] = useState<genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await getCategory();
            setGenres(res.slice(2, numberOfGenres+2))
            setLoading(false)
        }
        fetchCategory();
    }, [numberOfGenres])

    if (process.env.NEXT_PUBLIC_RESOURCES == undefined) return <></>

    return (
        <>
            { loading ? (
                <div className="container-lg mt-5 pt-5 category">
                    <div style={{ width: "100%", height: "300px", marginBottom: "10px" }} className='gradient'></div>
                </div>
            ) : (
                genres.map((genre, index) => {
                    return(
                        <div className="container-lg mt-5 pt-5 category" key={index}>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <a href={"/genre?name=" + encodeURIComponent(removeSpaces(genre.name))} className='text-decoration-none'><Typography variant="h4" sx={{ color: "#000" }}>{genre.name}</Typography></a>
                                </div>
                            </div>
    
                            <div className="row mt-2 justify-content-center">
                                {genre.audiobooks.slice(0, 4).map((audiobook, audiobook_index) => {
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
                                })}
                            </div> 
                        </div>
                    )
                })   
            ) }
        </>
    );
};

export default Category;
