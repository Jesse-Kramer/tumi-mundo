import * as server from '../entries/pages/languages/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/languages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/languages/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BBOho3Ga.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js","_app/immutable/chunks/Cxn1WWTA.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/DGu0IH2v.js","_app/immutable/chunks/9kngCTW-.js"];
export const stylesheets = ["_app/immutable/assets/CloudsSVG.tWK98wi1.css","_app/immutable/assets/5.BGJnHEb0.css"];
export const fonts = [];
