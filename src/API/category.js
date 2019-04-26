import axios from 'axios';
const BACKEND_URL = 'http://localhost:3000';


export const getCategories = () => {
    return axios.get(`${BACKEND_URL}/api/categories`, {
    })
        .then(res => {
            return res.data;

        });
}

export const getCategoriestById = (id) => {
    return axios.get(`${BACKEND_URL}/api/categories/${id}`, {
    })
        .then(res => {
            return res.data;
        });
}

export const editCategory = ({ name,id}) => {

    return axios.patch(`${BACKEND_URL}/api/categories/${id}`,{name})
        .then(res => res.data);
}