import axios from 'axios'

const URL = "https://localhost:5000/cards"

const fetchCards = () => axios.get(URL);
const createCard = (card) => axios.post(URL,card);
const fetchCardById = (id) => axios.get(`${URL}/${id}`);
const deleteCard = (id) => axios.delete(`${URL}/${id}`);
const updateCard = (id,card) => axios.patch(`${URL}/${id}`,card)
const likeCard = (id) => axios.patch(`${URL}/${id}/like`)

export {fetchCards,createCard,fetchCardById,deleteCard,updateCard,likeCard};


