"use server"

import axios from "axios"
import { setAuthToken } from "./Server"
import { audiobook, genre } from "../interfaces/interfaces"
import { timeStamp } from "console"

const emptyAudiobook = {
    added_at_date: new Date,
    audioLink: "",
    author: "",
    coverLink: "",
    description: "",
    duration: 0,
    title: "",
    genre: {
        id: {
            timestamp: 0,
            date: new Date,
        },
        name: "",
    },
    reviews: [{
        id: {
            timestamp: 0,
            date: new Date,
        },
        stars: 0,
        reviewBody: "",
    }]
} 

export const loginUser = async (login: string, password: string) => {
    await axios.post(process.env.NEXT_PUBLIC_APIV1 + "/login", {
        "username": login,
        "password": password
    }).then(res => {
        setAuthToken(res.data)
    })
    .catch(e => console.log(e))
}

export const getTopAudiobook = async () : Promise<audiobook> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobook/1984", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        return res.data as audiobook
    } catch {
        return emptyAudiobook
    }
}

export const getAudiobook = async (title: string) : Promise<audiobook> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobook/" + title, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return res.data as audiobook
    } catch {
        return emptyAudiobook
    }
}

export const getCategory = async () : Promise<genre[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genres");

        return res.data as genre[]
    }
    catch {
        return []
    }
}

/*axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genres")
        .then(response => {
            setGenres(response.data.slice(0, numberOfGenres))
            setLoading(false)
        }).catch(e => console.log(e)) */