"use client"

import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import axios from 'axios';
import Loading from './Loading';
import { genre } from '../interfaces/interfaces';

const Footer = () => {

    const removeSpaces = (value: string): string =>{
        return value.replaceAll(" ", "-");
    }

    const [genres, setGenres] = useState<genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/genres")
        .then(response => {
            setGenres(response.data)
            setLoading(false)
        })
    }, [])

    if (loading) return <Loading />

    console.log(genres)
    
    return(
        <>
            <div className='container-lg my-4'>
                <div className='row'>
                    {
                        genres.map((genre, indexGenre) => {
                            return(
                                <div className='col-auto my-2' key={indexGenre}>
                                    <a href={"/genre/" + removeSpaces(genre.name)} className="text-decoration-none" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <Typography variant='subtitle2'> { genre.name } </Typography>
                                    </a>
                                </div>
                            )
                        })
                    }

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
