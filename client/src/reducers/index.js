import { combineReducers } from "redux";
import cardReducer from "./cardReducers";
import loadingReducer from "./loadingReducers";
import authReducer from "./authReducers";

export const reducers= combineReducers({cardReducer,loadingReducer,authReducer});