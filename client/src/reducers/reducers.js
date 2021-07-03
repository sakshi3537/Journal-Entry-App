import { FETCH_ALL, FETCH_BY_ID } from "../constants/constants";

const helper = (cards = [],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_ID:
            return action.payload;
    }

}
export default helper;