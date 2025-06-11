import { d as deleteFromCollection } from "../../../../../chunks/api.js";
import { r as redirect } from "../../../../../chunks/index.js";
async function POST({ fetch, params, url }) {
  const { id } = params;
  try {
    await deleteFromCollection(fetch, "tm_playlist", id);
    throw redirect(303, new URL("/lessons", url.origin).toString());
  } catch (error) {
    console.error("Error with server-side delete:", error);
    throw redirect(303, new URL("/lessons", url.origin).toString());
  }
}
export {
  POST
};
