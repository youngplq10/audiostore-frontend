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

const emptyGenre = {
    audiobooks: [{
        added_at_date: new Date,
        audioLink: "",
        author: "",
        coverLink: "",
        description: "",
        duration: 0,
        id: {
            timestamp: 0,
            date: new Date
        },
        published_at_date: new Date,
        title: "",
        reviews: [{
            id: {
                timestamp: 0,
                date: new Date
            },
            reviewBody: "",
            stars: 0
        }]
    }],
    name: "",
    id: {
        timestamp: 0,
        date: new Date
    }
}

export const loginUser = async (login: string, password: string) : Promise<boolean> => {
    try {
        const res = await axios.post(process.env.NEXT_PUBLIC_APIV1 + "/login", {
            "username": login,
            "password": password
        })
        
        if ( res.data[0] !== "<" ) {
            setAuthToken(res.data)
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err)
        return false
        
    }
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

export const getAudiobooks = async () : Promise<audiobook[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobooks")

        return res.data as audiobook[]
    } catch {
        return []
    }
}

export const getSingleCategory = async (genreName: string) : Promise<genre> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genre/" + genreName)

        return res.data as genre
    } catch {
        return emptyGenre
    }
}