import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";


import user from "./user/user.reducer";
import repositories from './repositories/repositories.reducer'
import loading from "./loading";

export default function createReducer(
    history = History
) {
    return combineReducers({
        router: connectRouter(history),
        loading,
        user,
        repositories
    });
}

