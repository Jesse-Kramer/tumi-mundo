import * as server from '../entries/pages/lessons/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lessons/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/lessons/+page.server.js";
export const imports = ["_app/immutable/nodes/6.McmPrhKY.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/Cxn1WWTA.js","_app/immutable/chunks/Ca77UQXl.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/BseAxXhg.js","_app/immutable/chunks/Q6_ZzNXZ.js","_app/immutable/chunks/Ry3i9sZY.js","_app/immutable/chunks/9kngCTW-.js","_app/immutable/chunks/CMNCev3F.js"];
export const stylesheets = ["_app/immutable/assets/CloudsSVG.tWK98wi1.css","_app/immutable/assets/6.DJn3SV7j.css"];
export const fonts = [];
