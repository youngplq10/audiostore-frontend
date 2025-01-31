import { Box, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
    return(
        <>
            <Box sx={{ minHeight: '100vh' }}>
                <Typography variant='h1' className='text-center'>Loading</Typography>
            </Box>
        </>
    )
}

export default Loading