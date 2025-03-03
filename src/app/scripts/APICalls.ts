"use server"

import axios from "axios"
import { getAllCookies, setAuthToken } from "@/app/scripts/Server"
import { audiobook, genre, review, user } from "@/app/interfaces/interfaces"

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
    reviews: []
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
        const res = await axios.post(process.env.NEXT_PRIVATE_APIV1 + "/public/login", {
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

export const registerUser = async (login: string, email: string, password: string) : Promise<boolean> => {
    try {
        const res = await axios.post(process.env.NEXT_PRIVATE_APIV1 + "/public/register", {
            "username": login,
            "email": email,
            "password": password,
            "role": "USER",
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
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/audiobook/1984", {
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
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/audiobook/" + title, {
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
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/genres", {
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
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/audiobooks", {
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
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/genre/" + genreName, {
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

        if (username === undefined) {
            return emptyUser
        }

        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/auth/user/" + username, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })

        return res.data as user
    } catch (error) {
        return emptyUser
    }
}

export const saveAudiobook = async (title: string) => {
    try {
        const { username, token } = await getAllCookies();

        await axios.post(process.env.NEXT_PRIVATE_APIV1 + "/auth/like?username=" + username + "&title=" + title, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })      

    } catch (error) {
        throw error
    }
}

export const unSaveAudiobook = async (title: string) => {
    try {
        const { username, token } = await getAllCookies();

        await axios.post(process.env.NEXT_PRIVATE_APIV1 + "/auth/unlike?username=" + username + "&title=" + title, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })      
    } catch (error) {
        throw error
    }
}

export const getReviewsOfAudiobook = async (title: string) : Promise<review[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/reviews/" + title, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as review[]
    } catch (error) {
        throw error
    }
}

export const createReview = async (reviewBody: string, stars: number, audiobookTitle: string) : Promise<boolean> => {
    try {
        const { username, token } = await getAllCookies();

        console.log(username)
        console.log(token)
        console.log(audiobookTitle)

        await axios.post(process.env.NEXT_PRIVATE_APIV1 + "/auth/review?audiobookTitle=" + audiobookTitle + "&reviewBody=" + reviewBody + "&stars=" + stars + "&username=" + username, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        })

        return true;
    } catch (error) {
        throw error
    }
}

export const searchAudiobooks = async (search: string) : Promise<audiobook[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PRIVATE_APIV1 + "/public/audiobook/search?search=" + search, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return res.data as audiobook[]
    } catch (error) {
        throw error
    }
}