"use client"

import { Button } from '@mui/material';
import React, { useState } from 'react'
import { loginUser } from '@/app/scripts/APICalls';

const LoginUI = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
            loginUser(login, password);
            window.location.href = "/"
    }

    return(
        <>
            <div className='container-lg my-5'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-10 col-md-6 col-xl-4">
                        <form>
                            <label>Login</label>
                            <input type='text' style={{ width: "100%" }} value={login} onChange={(e) => setLogin(e.target.value)} />

                            <label>Password</label>
                            <input type='password' style={{ width: "100%" }} value={password} onChange={(e) => setPassword(e.target.value)} />

                            <Button variant='contained' className='mt-2' onClick={handleLogin}>Login</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginUI
