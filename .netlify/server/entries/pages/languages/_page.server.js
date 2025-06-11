import { f as fetchAllData } from "../../../chunks/api.js";
let csr = true;
async function load({ fetch, url }) {
  const searchQuery = url.searchParams.get("search");
  const data = await fetchAllData(fetch);
  if (searchQuery) {
    data.languages = data.languages.filter(
      (language) => language.language.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return {
    ...data,
    languages: data.languages
  };
}
export {
  csr,
  load
};
