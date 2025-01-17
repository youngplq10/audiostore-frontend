import axios from "axios";
import { genre } from "../interfaces/interfaces";

export const getGenresAPI = async (url: string): Promise<genre[]> => {
    try {
        const response = await axios.get(url);
        return response.data // Return the data from the API response
    } catch (error) {
        // Handle any errors, e.g., by logging or throwing
        console.error("Error fetching genres:", error);
        throw error; // Optionally rethrow or return a default value
    }
};
