

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.DxEdeNjy.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js"];
export const stylesheets = ["_app/immutable/assets/10.OoF9gXOB.css"];
export const fonts = [];
