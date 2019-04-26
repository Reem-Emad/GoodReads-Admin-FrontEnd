import axios from 'axios';

const BackEnd_URL = process.env.REACT_APP_BackEnd_URL || 'http://localhost:3000';

export const register = ({email, password }) => {
    return axios.post(`${BackEnd_URL}/api/admin/register`, { email, password }).then(res => res.data);
}
export const login = ({ email, password }) => {
    return axios.post(`${BackEnd_URL}/api/users/login`, { email, password }).then(res => res.data)
}
export const getProfile = () => {
    return axios.get(`${BackEnd_URL}/api/admin/profile`, { headers: { authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => res.data);

}
