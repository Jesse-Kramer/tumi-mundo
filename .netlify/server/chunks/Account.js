import { w as writable } from "./index2.js";
const userState = writable({
  userId: null,
  profileId: null
});
export {
  userState as u
};
