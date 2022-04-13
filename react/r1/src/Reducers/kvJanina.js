import { DEL_KV } from "../Constants";

function kvJanina(state, action) {

    const c = [...state];

    switch (action.type) {
        case DEL_KV:
            c.shift();
            break;
        default:
    }
    return c;

}

export default kvJanina;