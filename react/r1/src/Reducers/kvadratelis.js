import { ADD_KV } from "../Constants";

function kvadratelis(state, action) {

    switch (action.type) {
        case ADD_KV:
            return [...state, 1];
        default:
            return state;
    }
}

export default kvadratelis;