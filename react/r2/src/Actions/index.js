import { GET_DATA_FROM_SERVER } from "../Constants";

export function getDataFromServer(serverData) {
    return {
        type: GET_DATA_FROM_SERVER,
        payload: serverData
    }
}