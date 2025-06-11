import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.Ddm0Ri3u.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/Ry3i9sZY.js","_app/immutable/chunks/ChBBVISH.js","_app/immutable/chunks/D8i1faRy.js"];
export const stylesheets = ["_app/immutable/assets/CloudsSVG.tWK98wi1.css","_app/immutable/assets/2.C8HbtlIz.css"];
export const fonts = [];
