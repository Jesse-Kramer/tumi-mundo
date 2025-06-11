import "../../../chunks/client.js";
/* empty css                                                      */
import { P as PUBLIC_APIURL } from "../../../chunks/public.js";
async function fetchApi(path, method = "GET", data = null) {
  const url = `${PUBLIC_APIURL}/items${path}`;
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (method !== "GET" && data) {
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(url, options);
    let result = null;
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      result = await response.json();
    }
    if (response.ok) {
      return result?.data || null;
    } else {
      console.error("Error:", result);
      throw new Error(result?.error || "An error occurred");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
async function POST({ request }) {
  try {
    const formData = await request.formData();
    const method = formData.get("_method") || "POST";
    switch (method) {
      case "DELETE": {
        const likeId = formData.get("likeId");
        if (!likeId) {
          return new Response(JSON.stringify({ error: "Missing likeId" }), { status: 400 });
        }
        await fetchApi(`/tm_likes/${likeId}`, "DELETE");
        break;
      }
      case "POST": {
        const playlistId = formData.get("playlistId");
        const profileId = formData.get("profileId");
        if (!playlistId || !profileId) {
          return new Response(JSON.stringify({ error: "Missing playlistId or profileId" }), { status: 400 });
        }
        await fetchApi("/tm_likes", "POST", {
          playlist: playlistId,
          profile: parseInt(profileId, 10)
        });
        break;
      }
      default:
        return new Response(JSON.stringify({ error: "Unsupported method" }), { status: 405 });
    }
    return new Response(null, {
      status: 303,
      headers: {
        Location: "/lessons"
      }
    });
  } catch (error) {
    console.error("Error in /like:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
export {
  POST
};
