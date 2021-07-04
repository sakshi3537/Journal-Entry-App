import * as api from '../api/api.js'
import { FETCH_ALL, FETCH_BY_ID } from "../constants/constants";

const fetchCards = () => async (dispatch) => {
    try {
        const {cards} = await api.fetchCards();
        dispatch({type : FETCH_ALL, payload : cards});
    } catch (error) {
        console.log(error);
    }
}

const createCard = (card) => async (dispatch) => {
    try {
        await api.createCard(card);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}

const fetchCardById = (id) => async (dispatch) => {
    try {
        const {card} = await api.fetchCardById(id);
        dispatch({type : FETCH_BY_ID, payload : card});
    } catch (error) {
        console.log(error);
    }
}
const deleteCard = (id) => async (dispatch) => {
    try {
        await api.deleteCard(id);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}
const updateCard = (id,card) => async (dispatch) => {
    try {
        await api.updateCard(id,card);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}
const likeCard = (id) => async (dispatch) => {
    try {
        await api.likeCard(id);
        fetchCards();
    } catch (error) {
        console.log(error);
    }
}

export {fetchCards,createCard,fetchCardById,deleteCard,updateCard,likeCard};

