import { SIGN_IN,LOG_OUT } from "../constants/constants";


const authReducer = (authData=null,action) => {
    switch(action.type){
        case SIGN_IN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return action?.payload;
        case LOG_OUT:
            localStorage.clear();
            return null;     
        default:
            return authData;
    }

}



export default cardReducer;