import { postEndpoint } from "../endpoints/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(postEndpoint.fetchAll);

  return res.json();
}