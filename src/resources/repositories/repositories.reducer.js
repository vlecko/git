import { FETCH_REPOSITORIES } from "./repositories.actions";

const IState = {
    repositories: [],
};

export default function usersReducer(
    state = IState,
    action,
) {
    switch (action.type) {
        case FETCH_REPOSITORIES: {
            return {
                ...state,
                repositories: [...action.payload],
            }
        }
        default:
            return state;
    }
};
