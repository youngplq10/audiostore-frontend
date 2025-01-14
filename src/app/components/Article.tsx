"use client"

import { Alert, Button, Typography } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";

const Article = () => {
    return (
        <>
            <article className="container-lg py-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-auto order-lg-2 mt-2">
                        <Alert 
                            icon={<WhatshotIcon fontSize="inherit" />} 
                            severity="info" 
                            className="mb-3 d-lg-none" // Visible only on smaller screens
                        >
                            Top 1
                        </Alert>
                        <Image
                            src={RomeoAndJuliet}
                            width={300}
                            height={400}
                            className="rounded-4"
                            alt="romeo and juliet"
                        />
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
                                <Typography variant="h2">Romeo & Juliet</Typography>
                                <Typography variant="body1">
                                A timeless tale of forbidden love and tragic fate, Romeo and Juliet by William Shakespeare follows the passionate romance of two young lovers from feuding families. Set in Verona, this iconic story explores themes of love, destiny, and the devastating consequences of hatred. Experience the enduring power of one of the greatest love stories ever told in this captivating audiobook adaptation.
                                </Typography>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <Button variant="contained">Listen now</Button>
                                <Button variant="outlined" className="ms-2">Find more</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Article;
