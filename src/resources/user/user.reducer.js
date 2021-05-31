import { FETCH_USER, SET_QUERY } from "./user.actions";

const IState = {
    query: '',
    user: {},
};

export default function usersReducer(
    state = IState,
    action,
) {
    switch (action.type) {
        case SET_QUERY: {
            return {
                ...state,
                query: action.input,
            };

        }
        case FETCH_USER: {
            return {
                ...state,
                user: { ...action.payload, },
            };

        }

        default:
            return state;
    }
};
