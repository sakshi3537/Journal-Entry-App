import { FETCH_ALL_USERS,FETCH_USERS } from "../constants/constants";


const userReducer = (users=[],action) => {
    switch(action.type){
        case FETCH_ALL_USERS:
            return action.payload;    
        case FETCH_USERS:
                return action.payload; 
        default:
            return users;
    }

}



export default userReducer;