import * as api from '../api/api.js'
import { SIGN_IN,LOADING_FALSE,LOADING_TRUE,LOG_OUT} from "../constants/constants";


const signIn = ({formData,history}) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const data = await api.signIn(formData); 
        console.log("hello Reached")
        dispatch({type: SIGN_IN, payload : data});
        dispatch({type:LOADING_FALSE});
        history.push('/');
        console.log("Reached")

    } catch (error) {
        console.log(error);
    }
}

const signUp = ({formData,history}) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        const {data} = await api.signUp(formData); 
        dispatch({type: SIGN_IN, payload : data})
        dispatch({type:LOADING_FALSE});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}


const logOut = (history) => async (dispatch) => {
    try {
        dispatch({type:LOADING_TRUE});
        dispatch({type: LOG_OUT})
        dispatch({type:LOADING_FALSE});
        history.push('/auth')
    } catch (error) {
        console.log(error);
    }
}
 export {signIn, signUp, logOut};

