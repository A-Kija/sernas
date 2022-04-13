import { ADD_KV, DEL_KV } from "../Constants";

function kvadratelis(state, action) {



    // switch (action.type) {
    //     case ADD_KV:
    //         return [...state, 1];
    //     case DEL_KV:
    //         return state.filter((_, i) => i !== 0);
    //     default:
    //         return state;
    // }

    const c = [...state];

    switch (action.type) {
        case ADD_KV:
            c.push(1);
            break;
        case DEL_KV:
            c.shift();
            break;
        default:
    }
    return c;

}

export default kvadratelis;