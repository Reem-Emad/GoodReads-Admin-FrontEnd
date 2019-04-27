import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';


export const getBooks = () => {
    return axios.get(`${BACKEND_URL}/api/books`, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;

        })
}
export const getBooksById = (id) => {
    return axios.get(`${BACKEND_URL}/api/books/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}
export const addNewBook = ({ title, author, description, numOfPages, category, cover }) => {
   
    return axios.post(`${BACKEND_URL}/api/books/add`, { title, author, description, numOfPages, category, cover }, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => res.data)
}
export const deleteBook = (id) => {
    return axios.delete(`${BACKEND_URL}/api/books/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}
export const searchForBooks = (name) => {

    return axios.post(`${BACKEND_URL}/api/books/search`, { name }, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => res.data)
}