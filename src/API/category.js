import axios from 'axios';
const BACKEND_URL = 'http://localhost:3000';


export const getCategories = () => {
    return axios.get(`${BACKEND_URL}/api/categories`,{ headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}`} })
        .then(res => {
            return res.data;
        });
}

export const getCategoriestById = (id) => {
    return axios.get(`${BACKEND_URL}/api/categories/${id}`,{ headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}`}})
        .then(res => {
            return res.data;
        });
}


export const editCategory = ({ name, id }) => {

    return axios.patch(`${BACKEND_URL}/api/categories/${id}`, { name })
        .then(res => res.data);
}


//////////////////////////////////
export const addCategory = ({ Name }) => {
   
    return axios.post(`${BACKEND_URL}/api/categories/add`, {Name }, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => res.data)
}
export const deletecategory = (Name) => {
    return axios.delete(`${BACKEND_URL}/api/books/${Name}`, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}