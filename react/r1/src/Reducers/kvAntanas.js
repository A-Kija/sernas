import { ADD_KV } from "../Constants";

function kvAntanas(state, action) {

    const c = [...state];

    switch (action.type) {
        case ADD_KV:
            c.push(1);
            break;
        default:
    }
    return c;

}

export default kvAntanas;