"use client"

import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { genre } from '@/app/interfaces/interfaces';
import { removeSpaces } from '@/app/scripts/removeSpaces';
import { getCategory } from '@/app/scripts/APICalls';

const Footer = () => {
    const [genres, setGenres] = useState<genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await getCategory();

            setGenres(res);
            setLoading(false)
        }
        fetchCategory()
    }, [])
    
    return(
        <>
            <div className='container-lg my-4'>
                <div className='row'>
                    { loading ? (
                        <div style={{ width: "100%", height: "40px", marginBottom: "10px" }} className='gradient'></div>
                    ) : (
                        genres.map((genre, indexGenre) => {
                            return(
                                <div className='col-auto my-2' key={indexGenre}>
                                    <a href={"/genre?name=" + encodeURIComponent(removeSpaces(genre.name))} className="text-decoration-none" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant='subtitle2'> { genre.name } </Typography>
                                    </a>
                                </div>
                            )
                        })
                        
                    ) }

                    <div className="row mt-2">
                        <div className='col-auto ms-auto'>
                            <Typography variant='subtitle2'>Made by starzynski.dev for</Typography>
                            <Typography variant='subtitle2'>C Audiobooks</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
