import * as api from '../api/api.js'
import { FETCH_ALL, FETCH_BY_ID } from "../constants/constants";

const fetchCards = () => async (dispatch) => {
    try {
        const {data} = await api.fetchCards();
        const cards=data;
        dispatch({type : FETCH_ALL, payload : cards});
    } catch (error) {
        console.log(error);
    }
}

const createCard = (card) => async (dispatch) => {
    try {
        await api.createCard(card);
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}

const fetchCardById = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchCardById(id);
        const card=data;
        dispatch({type : FETCH_BY_ID, payload : card});
    } catch (error) {
        console.log(error);
    }
}
const deleteCard = (id) => async (dispatch) => {
    try {
        await api.deleteCard(id);
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}
const updateCard = (card)  => async(dispatch) => {
    try {
        await api.updateCard(card);
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}
const likeCard = (id) => async(dispatch) => {
    try {
        await api.likeCard(id);
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}

export {fetchCards,createCard,fetchCardById,deleteCard,updateCard,likeCard};

