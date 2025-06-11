

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/onboarding/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.CzpmkJuD.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js"];
export const stylesheets = ["_app/immutable/assets/8.PPXPUcwu.css"];
export const fonts = [];
