

const defaultState = false;

export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const LOADING_FAIL = "LOADING_FAIL";

export default function loadingReducer(
  state = defaultState,
  action
) {
  switch (action.type) {
    case LOADING_START: {
      return true;
    }
    case LOADING_END:
    case LOADING_FAIL: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export function loadingStart() {
  return { type: LOADING_START };
}

export function loadingEnd() {
  return { type: LOADING_END };
}

export function loadingFail() {
  return { type: LOADING_FAIL };
}
