import {GET_HOSPITALS, GET_HOSPITAL} from "../actions/types";

const initialState = {
    hospitals: [],
    hospital: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOSPITALS:
                return {
                    ...state,
                    hospitals: action.payload
                };
            break;
        case GET_HOSPITAL:
                return {
                    ...state,
                    hospital: action.payload
                };
            break;    
    
        default:
            return state;
    }
}