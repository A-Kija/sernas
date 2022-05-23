import { GET_DATA_FROM_SERVER } from "../Constants";

function reducer(state, action) {

    let newState;
    switch(action.type) {
        case GET_DATA_FROM_SERVER:
            newState = action.payload;
            break;
        default:
    }

    return newState;
}

export default reducer;