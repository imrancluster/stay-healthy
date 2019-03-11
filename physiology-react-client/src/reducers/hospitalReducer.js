import {GET_HOSPITALS} from "../actions/types";

const initialState = {
    hospitals: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOSPITALS:
                return {
                    ...state,
                    hospitals: action.payload
                };
            break;
    
        default:
            return state;
    }
}