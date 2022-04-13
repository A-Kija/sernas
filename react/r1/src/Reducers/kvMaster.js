import kvAntanas from "./kvAntanas";
import kvJanina from "./kvJanina";

function kvMaster(state, action) {

    if (action.type >= 1000 && action.type <= 2000) {
        return kvAntanas(state, action)
    }

    if (action.type >= 3000 && action.type <= 4000) {
        return kvJanina(state, action)
    }

    return state;

}

export default kvMaster;