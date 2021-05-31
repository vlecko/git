const EMPTY_ARRAY = [];

export function getRepositories({ repositories }) {
    return repositories.repositories || EMPTY_ARRAY;
}
