import { FETCH_ALL, FETCH_BY_ID } from "../constants/constants";

const cardReducer = (cards = [],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_ID:
            return action.payload;
        default:
            return cards;
    }

}
export default cardReducer;