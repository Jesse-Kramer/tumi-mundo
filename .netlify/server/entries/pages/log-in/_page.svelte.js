import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                      */
import { I as Input } from "../../../chunks/Input.js";
import { C as Close } from "../../../chunks/Close.js";
const css = {
  code: ":root{--color-text:white;;;--padding-small:0.8rem;--padding-medium:1rem;--padding-large:2rem;--gap-small:.3em;--gap-medium:.6em;--popup-width:25em;--popup-height:31.25em}section.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{padding:0 var(--padding-large)}main.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,section.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.buttons.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{display:flex;flex-direction:column}section.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.buttons.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{align-items:center}main.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{background:url(/log-in-background.png), var(--bg-image-blue);background-size:cover;background-repeat:no-repeat;background-position:bottom;height:100dvh;width:100%;color:var(--color-text)}section.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{flex-grow:1;justify-content:start}h1.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{margin-top:10rem;font-size:3em;font-weight:bold;margin-bottom:0.5rem}p.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,label.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{font-size:var(--font-size-md)}.buttons.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{margin-top:auto;gap:var(--gap-medium);margin-bottom:3.75em;width:100%}button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.popup-button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.login-popup.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.sign-up.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{text-decoration:none;border:1px solid var(--color-white);border-radius:.6em;padding:.8rem;max-width:17rem;background-color:var(--color-login-bg);color:var(--color-white);text-align:center;cursor:pointer;margin:auto;display:block}.popup-button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{width:100%}button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,.sign-up.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{text-decoration:none;background-color:#F0F0F0;color:hsla(0, 0%, 33%, 1);padding:.8rem 1rem}button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu:hover,.popup-button.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu:hover{background-color:var(--color-login-bg-hover)}a.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{color:var(--color-link);text-decoration:underline;max-width:22rem;text-align:center}.popup-title.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{display:flex;align-items:center;justify-content:space-between;position:relative}.popup-title.svelte-y2qcnu h2.svelte-y2qcnu.svelte-y2qcnu{position:absolute;left:50%;transform:translateX(-50%);font-size:var(--font-size-lg)}.close-div.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--gap-small);margin-left:auto}.close-div.svelte-y2qcnu label.svelte-y2qcnu.svelte-y2qcnu{cursor:pointer;color:hsla(0, 0%, 20%, 1);margin-right:-.6em}h2.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{margin:auto}h2.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu,label.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{color:black}input.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{padding:var(--padding-medium);background-color:var(--color-bg-light);border:none;border-radius:1.875em;margin-bottom:1.25em;font-size:var(--font-size-md);height:3rem}label.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{margin-bottom:var(--gap-medium);max-width:20rem}.popup-container.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{display:inline-block}.popup-container.svelte-y2qcnu .popup.svelte-y2qcnu.svelte-y2qcnu{position:fixed;top:0;width:100%;height:150%;background:var(--color-popup-bg);z-index:10;opacity:0;visibility:hidden;transition:250ms all}.popup-container.svelte-y2qcnu .popup .popup-inner.svelte-y2qcnu.svelte-y2qcnu{height:var(--popup-height);width:var(--popup-width);box-sizing:border-box;border-radius:1.25em;padding:1.25em;background:var(--color-white);position:absolute;left:50%;transform:translate(-50%, -50%);top:150%;transition:250ms all}.popup-container.svelte-y2qcnu .popup .popup-inner .popup-title.svelte-y2qcnu.svelte-y2qcnu{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25em}.popup-container.svelte-y2qcnu>input.svelte-y2qcnu.svelte-y2qcnu{display:none}.popup-container.svelte-y2qcnu>input.svelte-y2qcnu:checked+.popup.svelte-y2qcnu{opacity:1;visibility:visible}.popup-container.svelte-y2qcnu>input:checked+.popup .popup-inner.svelte-y2qcnu.svelte-y2qcnu{top:50%}.error-message.svelte-y2qcnu.svelte-y2qcnu.svelte-y2qcnu{color:red;margin-top:.6em;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.users;
  let email = "";
  let password = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="svelte-y2qcnu"><section class="svelte-y2qcnu" data-svelte-h="svelte-sti12n"><h1 class="svelte-y2qcnu">Tumi Mundo</h1> <p class="svelte-y2qcnu">Your language learning app</p> <div class="buttons svelte-y2qcnu"><label class="popup-button svelte-y2qcnu" for="login-popup">Login</label> <a href="/onboarding" class="sign-up svelte-y2qcnu">New to Tumi Mundo? Sign up!</a> <a href="/log-in" class="svelte-y2qcnu">I don&#39;t remember my password/username</a></div></section> <div class="popup-container svelte-y2qcnu"><input type="checkbox" id="login-popup" class="svelte-y2qcnu"> <div class="popup svelte-y2qcnu"><label for="login-popup" class="transparent-label svelte-y2qcnu"></label> <div class="popup-inner svelte-y2qcnu"><div class="popup-title svelte-y2qcnu"><h2 class="svelte-y2qcnu" data-svelte-h="svelte-xd6exf">Log in</h2> <div class="close-div svelte-y2qcnu">${validate_component(Close, "Close").$$render($$result, {}, {}, {})} <label for="login-popup" class="popup-close-btn svelte-y2qcnu" data-svelte-h="svelte-1kqmolj">Close</label></div></div> <div class="popup-content"><form><ul><li>${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        name: "email-input",
        placeholder: "Email",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</li> <li>${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        name: "password-input",
        placeholder: "Password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}</li> <li data-svelte-h="svelte-624z2m"><button type="submit" class="login-popup svelte-y2qcnu">Log in</button></li> ${``} <li data-svelte-h="svelte-1mz3vvk"><a href="/" class="svelte-y2qcnu">I don&#39;t remember my password/username</a></li></ul></form></div></div></div></div> </main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
