import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute } from "./ssr.js";
/* empty css                                        */
const css = {
  code: ':root{--button-blue:hsl(200, 52%, 46%);--button-darker-blue:hsl(200, 49%, 26%);--button-grey:hsl(0, 0%, 75%)}input[type="submit"].svelte-1bndq45,button.svelte-1bndq45{margin-top:auto;min-height:3em;width:85%;max-width:31.25em;padding:.8em;border-radius:.4em;border:none;font-size:1.1em;bottom:0;margin-bottom:2.5em;cursor:pointer;transition:background-color 0.3s ease, color 0.3s ease}.primary.svelte-1bndq45{background-color:var(--button-darker-blue);color:var(--primary-text)}.primary.svelte-1bndq45:hover,.primary.svelte-1bndq45:focus{background-color:#1A3B4C}.secondary.svelte-1bndq45{background-color:var(--button-grey);color:hsl(0, 0%, 48%)}.secondary.svelte-1bndq45:hover,.secondary.svelte-1bndq45:active{background-color:var(--button-darker-blue);color:white}',
  map: null
};
const ContinueBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button" } = $$props;
  let { label = "Continue" } = $$props;
  let { variant = "primary" } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `${type === "button" ? `<button class="${escape(null_to_empty(variant), true) + " svelte-1bndq45"}">${escape(label)}</button>` : `${type === "input" ? `<input type="submit" class="${escape(null_to_empty(variant), true) + " svelte-1bndq45"}"${add_attribute("value", label, 0)}>` : ``}`}`;
});
export {
  ContinueBtn as C
};
