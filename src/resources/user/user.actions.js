import createApiAction from "../apiActionCreator";
import * as api from "./user.api";

export const FETCH_USER = "FETCH_USER";
export const SET_QUERY = "SET_QUERY";

export function fetchUser(query) {
    return createApiAction(FETCH_USER, api.getUser)({ query });
}