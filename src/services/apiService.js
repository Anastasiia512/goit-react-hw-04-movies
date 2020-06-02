import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'
const MyKey = 'df6e2c99c9193b641405993d215ef9a3';

export const request = () => {
    const queryParam = 'trending/movie/day'
    return axios.get(`${BASE_URL}${queryParam}?api_key=${MyKey}`);
}

export const requestWithiD = (id) => {
    return axios.get(`${BASE_URL}${id}?api_key=${MyKey}`)
}
//api.themoviedb.org/3/movie/550?api_key=df6e2c99c9193b641405993d215ef9a3
//api.themoviedb.org/3/search/movie?api_key=df6e2c99c9193b641405993d215ef9a3&language=en-US&query=king&page=1&include_adult=false