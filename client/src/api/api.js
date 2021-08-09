import axios from 'axios'

const URL = "http://localhost:5000/cards"
const AUTH_URL = "http://localhost:5000/auth"
const BASE_URL = "http://localhost:5000"
axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))?.token}`;
    }
  
    return req;
  });

const fetchCards = () => axios.get(URL);
const createCard = (card) => axios.post(URL,card);
//const fetchCardById = (id) => axios.get(`${URL}/${id}`);
const deleteCard = (id) => axios.delete(`${URL}/${id}`);
const updateCard = (card) => axios.patch(`${URL}/${card._id}`,card);
const likeCard = (id) => axios.patch(`${URL}/${id}/like`);

const signIn = (formData) => axios.post(`${AUTH_URL}/signIn`,formData);
const signUp = (formData) => axios.post(`${AUTH_URL}/signUp`,formData)

const fetchAllUsers = () => axios.get(`${BASE_URL}/allUsers`);

const fetchUsers = (searchQuery) => axios.get(`${BASE_URL}/users/${searchQuery}`)

const addFriend = (id) => axios.patch(`${BASE_URL}/addFriend/${id}`)

const fetchMyCards = () => axios.get(`${URL}/myCards`);

export {fetchCards,createCard,deleteCard,updateCard,likeCard,signIn,signUp,fetchAllUsers,fetchUsers,addFriend,fetchMyCards};


