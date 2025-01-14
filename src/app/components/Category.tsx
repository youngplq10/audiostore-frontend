"use client"

import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";
import StarIcon from '@mui/icons-material/Star';

const Category = ({ name }: { name: string }) => {
    return (
        <>
            <div className="container-lg mt-5 pt-5 category">
                <div className="row">
                    <div className="col-12 text-center">
                        <Typography variant="h4">{name}</Typography>
                    </div>
                </div>

                <div className="row mt-2 justify-content-center">
                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={250}
                            height={350}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="body1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle1" className="ms-1">Elena R Cross</Typography>
                        
                        <Box display="flex" alignItems="center" className="">
                            <StarIcon sx={{ marginRight: 0.5 }} />
                            <Typography variant="body1">4.7</Typography>
                        </Box>
                    </div>

                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={250}
                            height={350}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="body1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle1" className="ms-1">Elena R Cross</Typography>
                        
                        <Box display="flex" alignItems="center" className="">
                            <StarIcon sx={{ marginRight: 0.5 }} />
                            <Typography variant="body1">4.7</Typography>
                        </Box>
                    </div>

                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={250}
                            height={350}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="body1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle1" className="ms-1">Elena R Cross</Typography>
                        
                        <Box display="flex" alignItems="center" className="">
                            <StarIcon sx={{ marginRight: 0.5 }} />
                            <Typography variant="body1">4.7</Typography>
                        </Box>
                    </div>
                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={250}
                            height={350}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="body1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle1" className="ms-1">Elena R Cross</Typography>
                        
                        <Box display="flex" alignItems="center" className="">
                            <StarIcon sx={{ marginRight: 0.5 }} />
                            <Typography variant="body1">4.7</Typography>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;
