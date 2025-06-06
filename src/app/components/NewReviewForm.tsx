"use client"

import { Alert, AlertTitle, Button } from '@mui/material'
import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { validateReview } from '@/app/scripts/Validation';
import { useSearchParams } from 'next/navigation';
import { createReview } from '@/app/scripts/APICalls';

const NewReviewForm = () => {
    const [reviewBody, setReviewBody] = useState("");
    const [stars, setStars] = useState(0);

    const [reviewError, setReviewError] = useState("");
    const [reviewErrorState, setReviewErrorState] = useState(true);

    const handleSubmit = async () => {
        const validated = validateReview(reviewBody)

        if (validated === "Success") {
            const res = await createReview(reviewBody, stars, title);

            if (res === true) {
                window.location.href = "/audiobook?title=" + title
            } else {
                setReviewError("Can't creating review. Please try again.")
                setReviewErrorState(false)
            }
        } else {
            setReviewError(validated)
            setReviewErrorState(false)
        }
    }

    const params = useSearchParams();
    const title = params.get("title") ? decodeURIComponent(params.get("title")!) : '';

    return (
        <div className='container-lg'>
            <div className="row justify-content-center mx-2 px-2 mt-5">
                <div className="col-12 col-sm-10 col-md-8 col-xl-10">
                    <form>
                        <label className='form-label'>How would you rate this audiobook?</label>
                        <input type='text' id='reviewBody' className='form-control' value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} min={3} maxLength={200} />
                        <div className="star-rating">
                            {[5, 4, 3, 2, 1].map((value) => (
                                <React.Fragment key={value}>
                                    <input 
                                        type="radio" 
                                        id={`star${value}`} 
                                        name="rating" 
                                        value={value} 
                                        checked={stars === value}
                                        onChange={(e) => setStars(Number(e.target.value))}
                                    />
                                    <label htmlFor={`star${value}`} title={`${value} stars`}><StarIcon /></label>
                                </React.Fragment>
                            ))}
                        </div> <br />
                        <Button variant='contained' className='mt-2' onClick={handleSubmit}>Share</Button>
                    </form>
                    <Alert hidden={reviewErrorState} severity='error' className='mt-5'>
                        <AlertTitle>Error</AlertTitle>
                            { reviewError }
                        </Alert>
                </div>
            </div>
        </div>
    )
}

export default NewReviewForm
