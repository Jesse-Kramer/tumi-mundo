import * as server from '../entries/pages/profile-selection/_page.server.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile-selection/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile-selection/+page.server.js";
export const imports = ["_app/immutable/nodes/11.B11PaFm8.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/Cxn1WWTA.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/D8i1faRy.js"];
export const stylesheets = ["_app/immutable/assets/11.9QN6gEQ_.css","_app/immutable/assets/CloudsSVG.tWK98wi1.css"];
export const fonts = [];
