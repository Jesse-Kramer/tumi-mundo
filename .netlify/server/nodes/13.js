import * as server from '../entries/pages/story/_id_/_page.server.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/story/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/story/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/13.URlLJK9z.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/Cxn1WWTA.js","_app/immutable/chunks/Ca77UQXl.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/9kngCTW-.js"];
export const stylesheets = ["_app/immutable/assets/13.x2rp7Mvy.css","_app/immutable/assets/CloudsSVG.tWK98wi1.css"];
export const fonts = [];
