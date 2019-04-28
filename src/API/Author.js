import axois from 'axios';
const BACKEND_URL = 'http://localhost:3000';

export const getAuthors = () => {
    return axois.get(`${BACKEND_URL}/api/authors`, { headers: { authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {

            return res.data;

        })

}
export const getAuthorById = (id) => {
    return axois.get(`${BACKEND_URL}/api/authors/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}
export const AddNewAuthor = ({ FullName, Image, NumberOfFriends, NumberOfBooks, Born, Website, Genre, Influences, MemberSince, Description }) => {

    return axois.post(`${BACKEND_URL}/api/authors/add`, {
        FullName,
        Image,
        NumberOfFriends,
        NumberOfBooks,
        Born,
        Website,
        Genre,
        Influences,
        MemberSince,
        Description
    }, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
        .catch(err => {
        })
}
export const EditAuthor = (id, { FullName, Image, NumberOfFriends, NumberOfBooks, Born, Website, Genre, Influences, MemberSince, Description }) => {

    return axois.patch(`${BACKEND_URL}/api/authors/${id}`, {
        FullName,
        Image,
        NumberOfFriends,
        NumberOfBooks,
        Born,
        Website,
        Genre,
        Influences,
        MemberSince,
        Description
    }, { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
        .catch(err => {
        })
}
export const DeleteAuthor = (id) => {
    return axois.delete(`${BACKEND_URL}/api/authors/${id}`, { headers: { authorization: `Bearer ${localStorage.getItem('adminToken')}` } })
        .then(res => {
            return res.data;
        })
}