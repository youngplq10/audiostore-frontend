import { Typography } from '@mui/material'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    
    return(
        <>
            <div className='container-lg my-4'>
                <div className='row'>
                    <div className='col-auto'>
                        <Typography variant='subtitle2'>Login</Typography>
                        <Typography variant='subtitle2'>Register</Typography>
                        <Typography variant='subtitle2'>Find more</Typography>
                    </div>

                    <div className='col-auto'>
                        <Typography variant='subtitle2'>Literature & Fiction</Typography>
                        <Typography variant='subtitle2'>Money & Finance</Typography>
                        <Typography variant='subtitle2'>Romance</Typography>
                        <Typography variant='subtitle2'>Health & Wellness</Typography>
                        <Typography variant='subtitle2'>History</Typography>
                        <Typography variant='subtitle2'>Erotica</Typography>
                    </div>

                    <div className='col-auto'>
                        <Typography variant='subtitle2'>Computers & Technology</Typography>
                        <Typography variant='subtitle2'>LGBTQ+</Typography>
                        <Typography variant='subtitle2'>Home & Garden</Typography>
                        <Typography variant='subtitle2'>Biographies & Memories</Typography>
                        <Typography variant='subtitle2'>Politics & Social Sciences</Typography>
                    </div>

                    <div className='col-auto ms-auto'>
                        <Typography variant='subtitle2'>Made by starzynski.dev for</Typography>
                        <Typography variant='subtitle2'>C Audiobooks</Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
