import {combineReducers} from "redux"
import hospitalReducer from "./hospitalReducer";

export default combineReducers ({
    hospital: hospitalReducer,
});