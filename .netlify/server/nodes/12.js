import * as server from '../entries/pages/sign-up/_page.server.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sign-up/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sign-up/+page.server.js";
export const imports = ["_app/immutable/nodes/12.Bv5nOkI2.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/Cxn1WWTA.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/BseAxXhg.js","_app/immutable/chunks/9kngCTW-.js"];
export const stylesheets = ["_app/immutable/assets/CloudsSVG.tWK98wi1.css","_app/immutable/assets/12.DpiXWIXx.css"];
export const fonts = [];
