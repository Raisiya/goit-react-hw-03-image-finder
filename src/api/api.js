import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '28417818-644aba253245949f255c992a1';

axios.defaults.baseURL = URL;
export const getApi = async (query, page, per_page) => {
    try {
        const res = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};