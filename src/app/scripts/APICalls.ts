"use server"

import axios from "axios"
import { getAllCookies, setAuthToken } from "@/app/scripts/Server"
import { audiobook, genre, user } from "@/app/interfaces/interfaces"
import { headers } from "next/headers"

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
const emptyUser = {
    username: "",
    email: "",
    phone: 0,
    likedAudiobooks: [{
        added_at_date: new Date,
        audioLink: "",
        author: "",
        coverLink: "",
        description: "",
        duration: 0,
        title: "",
    }]
}

export const loginUser = async (login: string, password: string) : Promise<boolean> => {
    try {
        const res = await axios.post(process.env.NEXT_PUBLIC_APIV1 + "/login", {
            "username": login,
            "password": password,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if ( res.data[0] !== "<" ) {
            setAuthToken(res.data)
            return true;
        } else {
            return false;
        }
    } catch (err) {
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
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genres", {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return res.data as genre[]
    }
    catch {
        return []
    }
}

export const getAudiobooks = async () : Promise<audiobook[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/audiobooks", {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as audiobook[]
    } catch {
        return []
    }
}

export const getSingleCategory = async (genreName: string) : Promise<genre> => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/genre/" + genreName, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as genre
    } catch {
        return emptyGenre
    }
}

export const getUserData = async () : Promise<user> => {
    try {
        const { username, token } = await getAllCookies();

        const res = await axios.get(process.env.NEXT_PUBLIC_APIV1 + "/user/" + username, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })

        return res.data as user
    } catch {
        return emptyUser
    }
}