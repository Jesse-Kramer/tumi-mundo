import { f as fetchAllData } from "../../chunks/api.js";
async function load({ locals }) {
  const data = await fetchAllData();
  return {
    ...data
  };
}
export {
  load
};
