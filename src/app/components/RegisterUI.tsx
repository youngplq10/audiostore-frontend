import { Alert, AlertTitle, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { validateNewUser } from '@/app/scripts/Validation';
import { registerUser } from '@/app/scripts/APICalls';

const RegisterUI = () => {
    const [validationErrorState, setValidationErrorState] = useState(true);
    const [validationErrorMessage, setValidationErrorMessage] = useState("");

    const [errorState, setErrorState] = useState(true);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const handleRegister = async () => {
        const validation = validateNewUser(username, email, password, repassword)

        if (validation === "Success") {
            setValidationErrorState(true)

            const res = await registerUser(username, email, password);
                        
            if ( res === true ) {
                window.location.href = "/"
            } else {
                setErrorState(false)
                setValidationErrorState(true)
            }
        } else {
            setValidationErrorState(false)
            setValidationErrorMessage(validation)
        }
    }
    
    return(
        <>
            <div className='container-lg my-5'>
                <div className="row justify-content-center align-items-center mt-5 pt-5">
                    <div className="col-10 col-md-6 col-xl-4 mt-5 pt-5">
                        <form>
                            <label>Username</label>
                            <input type='text' style={{ width: "100%" }} value={username} onChange={(e) => setUsername(e.target.value)} />

                            <label>E-mail</label>
                            <input type='text' style={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Password</label>
                            <input type='password' style={{ width: "100%" }} value={password} onChange={(e) => setPassword(e.target.value)} />

                            <label>Confirm password</label>
                            <input type='password' style={{ width: "100%" }} value={repassword} onChange={(e) => setRepassword(e.target.value)} />

                            <Button variant='contained' className='mt-2' onClick={handleRegister}>Register</Button>
                        </form>

                        <Typography variant='body1' className='mt-2'>You have an account? <a href='/login'>Log in now.</a></Typography>
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-md-6 col-xl-4">
                        <Alert hidden={errorState} severity='error' className='mt-5'>
                            <AlertTitle>Error</AlertTitle>
                            Error in creating account. Try again.
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

export default RegisterUI
