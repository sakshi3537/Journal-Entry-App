import * as api from '../api/api.js'
import { FETCH_ALL, LOADING_FALSE, LOADING_TRUE,FETCH_ALL_USERS,FETCH_USERS,FETCH_MY_CARDS, CLEAR_SEARCH_RESULTS} from "../constants/constants";

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
        dispatch(fetchMyCards());
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
        dispatch(fetchMyCards());
    } catch (error) {
        console.log(error);
    }
}
const updateCard = (card)  => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.updateCard(card);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchMyCards());
    } catch (error) {
        console.log(error);
    }
}
const likeCard = (id) => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.likeCard(id);
        dispatch({type:LOADING_FALSE});
        dispatch(fetchMyCards());
    } catch (error) {
        console.log(error);
    }
}

const fetchAllUsers = () => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.fetchAllUsers();
        const users=data;
        dispatch({type : FETCH_ALL_USERS, payload : users});
        dispatch({type:LOADING_FALSE});
    } catch (error) {
        console.log(error);
    }
}

const fetchUsers = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.fetchUsers(searchQuery);
        const users=data;
        dispatch({type : FETCH_USERS, payload : users});
        dispatch({type:LOADING_FALSE});
    } catch (error) {
        console.log(error);
    }
}
const addFriend = (id,isAdd) => async(dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        await api.addFriend(id);
        const data=JSON.parse(localStorage.getItem('profile'));
        let arr=data?.result?.friends;
        if(isAdd===true)
        arr.push(id);
        else
        arr=arr.filter(ele=>ele!==id);
        const newData={...data,result:{...data.result,friends:arr}};
        localStorage.setItem('profile',JSON.stringify(newData));
        dispatch({type:LOADING_FALSE});
        if(isAdd===true)
        dispatch({type:CLEAR_SEARCH_RESULTS,payload:'Friend Added Successfully'});
        else
        dispatch({type:CLEAR_SEARCH_RESULTS,payload:'Friend Removed Successfully'});
        //dispatch(fetchCards());
    } catch (error) {
        console.log(error);
    }
}

const fetchMyCards = () => async(dispatch) =>{
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.fetchMyCards();
        const cards=data;
        dispatch({type : FETCH_MY_CARDS, payload : cards});
        dispatch({type:LOADING_FALSE});
    } catch (error) {
        console.log(error);
    }
}
export {fetchCards,createCard,deleteCard,updateCard,likeCard,fetchAllUsers,fetchUsers,addFriend,fetchMyCards};

