import axois from 'axios';
const BACKEND_URL = 'http://localhost:3000';

export const getAuthorById = (id) => {
    return axois.get(`${BACKEND_URL}/api/authors/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}
