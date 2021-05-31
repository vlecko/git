export async function getRepositories(url) {
  const res = await fetch(`${url.query}?per_page=4&page=${url.pas}`)
  const repositories = await res.json()
  return repositories;
}
