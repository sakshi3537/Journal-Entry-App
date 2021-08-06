import { SIGN_IN,LOG_OUT,ERROR } from "../constants/constants";


const authReducer = (state= { profileData:null,token:null,status:null },action) => {
    switch(action.type){
        case SIGN_IN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return {...state,profileData:action?.payload.result,token:action?.payload.token};
        case LOG_OUT:
            localStorage.clear();
            return {...state,profileData:null,token:null};    
        case ERROR:
            return {...state,profileData:null,token:null,status:action?.payload}; 
        default:
            return state;
    }

}



export default authReducer;