import createApiAction from "../apiActionCreator";
import * as api from "./repositories.api";

export const FETCH_REPOSITORIES = "FETCH_REPOSITORIES";

export function fetchRepositories(query, pas) {
    return createApiAction(FETCH_REPOSITORIES, api.getRepositories)({ query, pas }, null, true);
}