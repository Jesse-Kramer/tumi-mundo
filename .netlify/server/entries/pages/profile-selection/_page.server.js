import { f as fetchAllData, i as mapProfilesWithImages } from "../../../chunks/api.js";
async function load({ locals }) {
  const data = await fetchAllData();
  const enhancedProfiles = mapProfilesWithImages(data.profiles);
  return {
    ...data,
    profiles: enhancedProfiles
  };
}
export {
  load
};
