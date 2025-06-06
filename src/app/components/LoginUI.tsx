"use client"

import { Alert, AlertTitle, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { loginUser } from '@/app/scripts/APICalls';
import { validateExistingUser } from '../scripts/Validation';

const LoginUI = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [errorState, setErrorState] = useState(true);
    const [validationErrorState, setValidationErrorState] = useState(true);
    const [validationErrorMessage, setValidationErrorMessage] = useState("");

    const handleLogin = async () => {
        const validation = validateExistingUser(login, password);

        if (validation === "Success") {
            const res = await loginUser(login, password);
            
            if ( res === true ) {
                window.location.href = "/"
            } else {
                setErrorState(false)
                setValidationErrorState(true)
            }
        } else {
            setValidationErrorState(false);
            setValidationErrorMessage(validation)
        }
    }

    return(
        <>
            <div className='container-lg my-5'>
                <div className="row justify-content-center align-items-center mt-5 pt-5">
                    <div className="col-10 col-md-6 col-xl-4 mt-5 pt-5">
                        <form>
                            <label>Login</label>
                            <input type='text' style={{ width: "100%" }} value={login} onChange={(e) => setLogin(e.target.value)} />

                            <label>Password</label>
                            <input type='password' style={{ width: "100%" }} value={password} onChange={(e) => setPassword(e.target.value)} />

                            <Button variant='contained' className='mt-2' onClick={handleLogin}>Login</Button>
                        </form>

                        <Typography variant='body1' className='mt-2'>You don't have an account? <a href='/register'>Create one now.</a></Typography>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-md-6 col-xl-4">
                        <Alert hidden={errorState} severity='error' className='mt-5'>
                            <AlertTitle>Error</AlertTitle>
                            Can't log in, try again.
                        </Alert>
                        <Alert hidden={validationErrorState} severity='error' className='mt-5'>
                            <AlertTitle>Error</AlertTitle>
                            { validationErrorMessage }
                        </Alert>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginUI
