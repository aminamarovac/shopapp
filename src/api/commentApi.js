import {commentEndpoint } from "../endpoints/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(commentEndpoint.fetchAll);

  return res.json();
}