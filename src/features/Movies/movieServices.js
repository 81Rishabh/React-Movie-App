import { Axios } from "../../config/axiosConfig"
import { URL } from "../../helper/urls"

export const get_popular = async (title,page) => {
   const response = await Axios.get(URL.getMoviesByCategory(title,page));
   return response.data; 
}

export const get_topRated = async (title,page) => {
    const response = await Axios.get(URL.getMoviesByCategory(title,page));
    return response.data; 
 }

 export const get_upComing = async (title,page) => {
    const response = await Axios.get(URL.getMoviesByCategory(title,page));
    return response.data; 
 }
 
 export const getMovieById = async (id) => {
    const response = await Axios.get(URL.getMovieByID(id));
    return response.data; 
 }
 
 export const getSearchResults = async (query) => {
    const response = await Axios.get(URL.getMovieByQuery(query));
    return response.data; 
 }



const movieServices = {
    get_popular,
    get_topRated,
    get_upComing,
    getMovieById,
    getSearchResults
}

export default movieServices;