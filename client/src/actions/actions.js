import * as api from '../api/api.js'
import { FETCH_ALL, LOADING_FALSE, LOADING_TRUE} from "../constants/constants";

const fetchCards = () => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.fetchCards();
        const cards=data;
        dispatch({type : FETCH_ALL, payload : cards});
        dispatch({type:LOADING_FALSE});
    } catch (error) {
        console.log(error);
    }
}

const createCard = (card) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.createCard(card);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}

/*const fetchCardById = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchCardById(id);
        const card=data;
        dispatch({type : FETCH_BY_ID, payload : card});
    } catch (error) {
        console.log(error);
    }
}*/
const deleteCard = (id) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.deleteCard(id);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}
const updateCard = (card)  => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.updateCard(card);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}
const likeCard = (id) => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.likeCard(id);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}


export {fetchCards,createCard,deleteCard,updateCard,likeCard};

