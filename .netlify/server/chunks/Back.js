import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const Back = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "black" } = $$props;
  let { flipped = false } = $$props;
  let { height = 40 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg width="40"${add_attribute("height", height, 0)} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="${"transform: rotate(" + escape(flipped ? "180deg" : "0deg", true) + ");"}"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.3398 8.55508C27.0797 9.29502 27.0797 10.4947 26.3398 11.2346L17.5743 20.0001L26.3398 28.7656C27.0797 29.5055 27.0797 30.7052 26.3398 31.4452C25.5998 32.1851 24.4002 32.1851 23.6602 31.4452L13.555 21.3399C12.815 20.6 12.815 19.4003 13.555 18.6603L23.6602 8.55508C24.4002 7.81514 25.5998 7.81514 26.3398 8.55508Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
export {
  Back as B
};
