import { SIGN_IN,LOG_OUT,ERROR } from "../constants/constants";


const authReducer = (authData=null,action) => {
    switch(action.type){
        case SIGN_IN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return null;
        case LOG_OUT:
            localStorage.clear();
            return null;    
        case ERROR:
            return action?.payload; 
        default:
            return authData;
    }

}



export default authReducer;