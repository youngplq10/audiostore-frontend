"use client"

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { getReviewsOfAudiobook } from '@/app/scripts/APICalls';
import { review } from '@/app/interfaces/interfaces';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Reviews = () => {
    const params = useSearchParams();
    const title = params.get("title") ? decodeURIComponent(params.get("title")!) : '';

    const [reviews, setReviews] = useState<review[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchReviews = async () => {
            const res = await getReviewsOfAudiobook(title)
            setReviews(res)
            console.log(res)
            setLoading(false)
        } 
        fetchReviews()
    }, [title])
    
    return (
        <div className='container-lg mt-4'>
            <div className="row justify-content-center">
                { loading ? (
                    <div style={{ width: "100%", height: "100px", marginBottom: "10px" }} className='gradient'></div>
                ) : (
                    reviews.slice(0, 3).map((review, index) => {
                        return (
                            <div className="col-10 col-md-5 col-xl-3 my-2 mx-2 px-2 py-2 border" key={index}>
                                <Typography variant='body1'> {review.user.username} </Typography>
                                <Typography variant='subtitle2'> {review.reviewBody} </Typography>
                                <Typography variant='subtitle2'>
                                {
                                    Array.from({ length: review.stars }, (_, i) => (
                                        <StarIcon />
                                    ))
                                }
                                </Typography>
                            </div>
                        )
                    }) 
                ) }
            </div>
        </div>
    )
}

export default Reviews
