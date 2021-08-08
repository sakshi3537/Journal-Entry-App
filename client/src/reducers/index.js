import { combineReducers } from "redux";
import cardReducer from "./cardReducers";
import loadingReducer from "./loadingReducers";
import authReducer from "./authReducers";
import userReducer from "./userReducer";

export const reducers= combineReducers({cardReducer,loadingReducer,authReducer,userReducer});