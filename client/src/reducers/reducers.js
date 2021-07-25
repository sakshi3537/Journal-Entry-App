import { FETCH_ALL, LOADING_TRUE, LOADING_FALSE } from "../constants/constants";

const InitialState={
    cards:[],
    isLoading:false
}

const cardReducer = (state=InitialState,action) => {
    switch(action.type){
        case FETCH_ALL:
            return {...state,cards:action.payload};
        case LOADING_TRUE:
            return {...state,isLoading:true};
        case LOADING_FALSE:
            return {...state,isLoading:false};
        default:
            return state;
    }

}



export default cardReducer;