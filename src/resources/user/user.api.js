export async function getUser(id) {
  const res = await fetch(`https://api.github.com/users/${id.query}`)
  const user = await res.json()
  return user;
}
