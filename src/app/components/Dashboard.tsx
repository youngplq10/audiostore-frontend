"use client"

import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import Image from "next/image"
import RomeoAndJuliet from "../assets/romeo-and-juliet-320.jpg";

const Dashboard = () => {
    return(
        <>
            <div className='container-lg py-5'>
                <div className='row'>
                    <div className='col-10 col-md-12 text-center'>
                        <Typography variant='h3'>Listening now</Typography>
                    </div>
                </div>

                <div className="row justify-content-center mt-2 gx-5">
                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={175}
                            height={250}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="subtitle1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle2" className="ms-1">Elena R Cross</Typography>

                        <Button variant='outlined' size='small' className='mt-1'>Continue listening</Button>
                    </div>

                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={175}
                            height={250}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="subtitle1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle2" className="ms-1">Elena R Cross</Typography>

                        <Button variant='outlined' size='small' className='mt-1'>Continue listening</Button>
                    </div>

                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={175}
                            height={250}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="subtitle1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle2" className="ms-1">Elena R Cross</Typography>

                        <Button variant='outlined' size='small' className='mt-1'>Continue listening</Button>
                    </div>

                    <div className="col-auto my-2">
                        <Image
                            src={RomeoAndJuliet}
                            width={175}
                            height={250}
                            className="rounded-4"
                            alt=""
                        />
                        <Typography variant="subtitle1" className="ms-1">Whispers of the Forgotten</Typography>
                        <Typography variant="subtitle2" className="ms-1">Elena R Cross</Typography>

                        <Button variant='outlined' size='small' className='mt-1'>Continue listening</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
