import { CLEAR_SEARCH_RESULTS, FETCH_ALL_USERS,FETCH_USERS,CLEAR_FRIEND_STATUS } from "../constants/constants";


const userReducer = (userData={users:[],status:''},action) => {
    switch(action.type){
        case FETCH_ALL_USERS:
            return {...userData,users:action.payload};    
        case FETCH_USERS:
            return {...userData,users:action.payload};
        case CLEAR_SEARCH_RESULTS:
            return {...userData,users:[],status:action.payload};
        case CLEAR_FRIEND_STATUS:
            return {...userData,status:''}
        default:
            return userData;
    }

}



export default userReducer;