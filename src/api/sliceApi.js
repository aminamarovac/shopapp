import { sliceEndpoint } from "../endpoints/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(sliceEndpoint.fetchAll);

  return res.json();
}