import { FETCH_ALL, FETCH_MY_CARDS } from "../constants/constants";


const cardReducer = (cards=[],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case FETCH_MY_CARDS:
            return action.payload;
        default:
            return cards;
    }

}



export default cardReducer;