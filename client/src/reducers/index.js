import { combineReducers } from "redux";
import cardReducer from "./cardReducers";
import loadingReducer from "./loadingReducers";

export const reducers= combineReducers({cardReducer,loadingReducer});