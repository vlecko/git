
import { loadingStart, loadingEnd, loadingFail } from "../resources/loading";

function requestStart(type, data) {
    return { type: `${type}_START`, asyncAction: type, requestData: data };
}

function requestFinish(type, data, payload) {
    return { type, asyncAction: type, requestData: data, payload };
}

function requestFail(type, data, error) {
    return { type: `${type}_FAIL`, asyncAction: type, requestData: data, error };
}

export default function createApiAction(
    type,
    apiHandler
) {
    return (data, params, skipLoading) => async (
        dispatch
    ) => {
        if (!skipLoading) {
            dispatch(loadingStart());
        }
        dispatch(requestStart(type, data));

        let payload;
        try {
            payload = await apiHandler(data, params);
            if (!skipLoading) {
                dispatch(loadingEnd());
            }
            dispatch(requestFinish(type, data, payload));
        } catch (err) {
            dispatch(loadingFail());
            dispatch(requestFail(type, data, err));
            throw err;
        }

        return payload;
    };
}
