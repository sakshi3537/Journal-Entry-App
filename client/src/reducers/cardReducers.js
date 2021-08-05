import { FETCH_ALL } from "../constants/constants";


const cardReducer = (cards=[],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        default:
            return cards;
    }

}



export default cardReducer;