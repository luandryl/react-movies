import axios from 'axios' 

const API_URL = 'http://www.omdbapi.com/?apikey=74f1367b&'

const getMovie = (title) => {
    let query = `${API_URL}s=${title}`
    return axios.get(query)
}


export const Http = {
    getMovie
}