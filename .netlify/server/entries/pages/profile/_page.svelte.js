import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-s1okyc,a.svelte-s1okyc{color:red;display:flex;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-s1okyc" data-svelte-h="svelte-1ut70jq"><a href="./log-in" class="svelte-s1okyc">Log out</a></h1>`;
});
export {
  Page as default
};
