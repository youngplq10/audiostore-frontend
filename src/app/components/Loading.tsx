import { Box, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
    return(
        <>
            <Box sx={{ minHeight: '20vh' }}>
                <Typography variant='h1' className='text-center mt-5 pt-5'>Loading</Typography>
            </Box>
        </>
    )
}

export default Loading