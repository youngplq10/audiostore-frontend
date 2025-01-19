"use client"

import { Button } from '@mui/material';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const LoginUI = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
            axios.post(process.env.NEXT_PUBLIC_APIV1 + "/login", {
                "username": login,
                "password": password
            }).then(response => {
                const decoded = jwtDecode(response.data)
                
                sessionStorage.setItem("username", decoded.sub || "")
                sessionStorage.setItem("token", response.data)

                router.push("/")
            })
            .catch(e => console.log(e))
    }

    return(
        <>
            <div className='container-lg my-5'>
                <div className="row justify-content-center align-items-center">
                    <div className="col-4">
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
