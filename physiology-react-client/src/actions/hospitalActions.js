import axios from "axios";

import {GET_HOSPITALS} from "./types";

export const getHospitals = () => async dispatch => {
    const res = await axios.get("/api/hospital/all");
    dispatch({
        type: GET_HOSPITALS,
        payload: res.data
    });
};