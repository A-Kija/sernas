import { ADD_1, ADD_11, ADD_RAND, DIF_1, DIF_11, DIF_RAND } from "../Constants";

export function add1() {
    return {
        type: ADD_1
    }
}

export function dif1() {
    return {
        type: DIF_1
    }
}

export function add11() {
    return {
        type: ADD_11
    }
}

export function dif11() {
    return {
        type: DIF_11
    }
}

export function addRand(payload) {
    return {
        type: ADD_RAND,
        payload: payload
    }
}

export function difRand(payload) {
    return {
        type: DIF_RAND,
        payload: payload
    }
}