import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createReducer from "./reducer";

export default function configureStore(initialState, history) {
    const store = createStore(
        createReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
    );

    if (module.hot) {
        module.hot.accept("./reducer", () => {
            store.replaceReducer(createReducer(history));
        });
    }

    return store;
}
