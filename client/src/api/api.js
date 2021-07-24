import axios from 'axios'

const URL = "http://localhost:5000/cards"

const fetchCards = () => axios.get(URL);
const createCard = (card) => axios.post(URL,card);
const fetchCardById = (id) => axios.get(`${URL}/${id}`);
const deleteCard = (id) => axios.delete(`${URL}/${id}`);
const updateCard = (card) => axios.patch(`${URL}/${card._id}`,card);
const likeCard = (id) => {axios.patch(`${URL}/${id}/like`);}

export {fetchCards,createCard,fetchCardById,deleteCard,updateCard,likeCard};


