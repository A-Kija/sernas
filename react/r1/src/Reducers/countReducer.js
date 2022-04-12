import { ADD_1, ADD_11, DIF_1, DIF_11 } from "../Constants";

function countReducer(state, action) {
    switch (action.type) {
        case ADD_1:
            return state + 1;
        case ADD_11:
            return state + 11;
        case DIF_1:
            return state - 1;
        case DIF_11:
            return state - 11;
        default:
            return state;
    }

}

export default countReducer;