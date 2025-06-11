import { c as create_ssr_component, b as add_attribute, e as escape, n as null_to_empty } from "./ssr.js";
/* empty css                                        */
const css = {
  code: "label.svelte-1wv4aym{color:black;margin-bottom:.6em;display:flex;flex-direction:column;text-align:left;font-size:1.2rem}input.svelte-1wv4aym{background-color:#EEEEEE;border:none;margin-bottom:1.2em;font-size:1rem;height:2rem;width:100%;border-radius:.5em;padding:1.5rem 1rem;box-sizing:border-box}.error.svelte-1wv4aym{color:#b60000;font-size:0.95em;margin-top:-1em;margin-bottom:1em;display:block;text-align:left}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  let { name = "" } = $$props;
  let { inputClass = "" } = $$props;
  let { label = "" } = $$props;
  let { error = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `<label${add_attribute("for", name, 0)} class="svelte-1wv4aym">${label ? `${escape(label)}` : `${type === "email" ? `Email` : `${type === "password" ? `Password` : `Name`}`}`}</label> ${type === "email" ? `<input type="email"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", name, 0)} class="${escape(null_to_empty(inputClass), true) + " svelte-1wv4aym"}"${add_attribute("value", value, 0)}>` : `${type === "password" ? `<input type="password"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", name, 0)} class="${escape(null_to_empty(inputClass), true) + " svelte-1wv4aym"}"${add_attribute("value", value, 0)}> ${error ? `<span class="error svelte-1wv4aym">${escape(error)}</span>` : ``}` : `<input type="text"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("aria-label", name, 0)} class="${escape(null_to_empty(inputClass), true) + " svelte-1wv4aym"}" required${add_attribute("value", value, 0)}> ${error ? `<span class="error svelte-1wv4aym">${escape(error)}</span>` : ``}`}`}`;
});
export {
  Input as I
};
