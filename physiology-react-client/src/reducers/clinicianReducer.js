import {GET_CLINICIANS, GET_CLINICIAN} from "../actions/types";

const initialState = {
    clinicians: [],
    clinician: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLINICIANS:
                return {
                    ...state,
                    clinicians: action.payload
                };
            break;  
        default:
            return state;
    }
}