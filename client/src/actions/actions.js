import * as api from '../api/api.js'
import { FETCH_ALL, FETCH_BY_ID } from "../constants/constants";

const fetchCards = async () => {
    try {
        const {cards} = await api.fetchCards();
        dispatch({type : FETCH_ALL, payload : cards});
    } catch (error) {
        console.log(error);
    }
}

const createCard = async (card) => {
    try {
        await api.createCard(card);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}

const fetchCardById = async (id) => {
    try {
        const {card} = await api.fetchCardById(id);
        dispatch({type : FETCH_BY_ID, payload : card});
    } catch (error) {
        console.log(error);
    }
}
const deleteCard = async (id) => {
    try {
        await api.deleteCard(id);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}
const updateCard = async (id,card) => {
    try {
        await api.updateCard(id,card);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}
const likeCard = async (id) => {
    try {
        await api.likeCard(id);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}



