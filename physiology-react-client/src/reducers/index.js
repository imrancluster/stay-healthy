import {combineReducers} from "redux"
import hospitalReducer from "./hospitalReducer";
import clinicianReducer from "./clinicianReducer";

export default combineReducers ({
    hospital: hospitalReducer,
    clinician: clinicianReducer,
});