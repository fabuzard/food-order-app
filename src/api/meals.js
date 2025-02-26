import axios from "axios"
const api_url = "http://localhost:3000"

export const fetchMeals = async()=>{
    const response = await axios.get(`${api_url}/meals`)
    return response.data
}