import axios from 'axios'

const URL = "http://localhost:5000/cards"
const AUTH_URL = "http://localhost:5000/auth"

const fetchCards = () => axios.get(URL);
const createCard = (card) => axios.post(URL,card);
//const fetchCardById = (id) => axios.get(`${URL}/${id}`);
const deleteCard = (id) => axios.delete(`${URL}/${id}`);
const updateCard = (card) => axios.patch(`${URL}/${card._id}`,card);
const likeCard = (id) => axios.patch(`${URL}/${id}/like`);

const signIn = (formData) => {axios.post(`${AUTH_URL}/signIn`,formData); console.log("api");}
const signUp = (formData) => axios.post(`${AUTH_URL}/signUp`,formData)


export {fetchCards,createCard,deleteCard,updateCard,likeCard,signIn,signUp};


