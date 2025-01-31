import React from 'react'
import Header from '../components/Header'
import LogoutConfirmation from '../components/LogoutConfirmation'

const page = () => {
    return (
        <div className='container-lg'>
            <Header />
            <LogoutConfirmation />
        </div>
    )
}

export default page
