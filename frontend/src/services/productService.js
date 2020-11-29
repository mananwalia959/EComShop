import axios from 'axios';

const baseurl = 'http://localhost:5000/api';

export const getAllProducts = () => {
    return axios.get(baseurl + '/products');
};

export const getProductById = (id) => {
    return axios.get(baseurl + '/products/' + id);
};
