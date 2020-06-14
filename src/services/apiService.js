import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'
const MyKey = 'df6e2c99c9193b641405993d215ef9a3';

export const request = () => {
    const queryParam = 'trending/movie/day'
    return axios.get(`${BASE_URL}${queryParam}?api_key=${MyKey}`);
}

export const requestWithiD = (id) => {
    return axios.get(`${BASE_URL}movie/${id}?api_key=${MyKey}`)
}

export const requestWithQuery = (query) => {
    return axios.get(`${BASE_URL}search/movie?api_key=${MyKey}&query=${query}`)
}

export const castRequest = (id) => {
        return axios.get(`${BASE_URL}movie/${id}/credits?api_key=${MyKey}`)
    
}
