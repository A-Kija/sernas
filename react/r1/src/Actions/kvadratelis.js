import { ADD_KV, DEL_KV } from "../Constants";

export function addKv() {
    return {
        type: ADD_KV
    }
}

export function delKv() {
    return {
        type: DEL_KV
    }
}