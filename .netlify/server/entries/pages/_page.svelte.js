import { c as create_ssr_component, e as escape, v as validate_component, a as subscribe } from "../../chunks/ssr.js";
import "../../chunks/client.js";
/* empty css                                                   */
import { M as Menu } from "../../chunks/Profile.js";
import { C as Close } from "../../chunks/Close.js";
import { u as userState } from "../../chunks/Account.js";
const css$1 = {
  code: "dialog.svelte-a5sjls.svelte-a5sjls{border:none;border-radius:.75rem;margin:0;transform:translateX(-50%);left:50%;top:30%}button.svelte-a5sjls.svelte-a5sjls{margin-left:auto;border:none;background-color:transparent}.popup.svelte-a5sjls.svelte-a5sjls{display:flex;flex-direction:column;background-color:white;color:black;height:5.3em;width:14em;border-radius:.75rem;padding:.5rem}.heading-close.svelte-a5sjls.svelte-a5sjls{width:100%;display:flex}form.svelte-a5sjls.svelte-a5sjls{margin-left:auto}.popup.svelte-a5sjls>a.svelte-a5sjls{background-color:#954BE2;color:white;width:100%;border-radius:.25em;text-align:center}.popup.svelte-a5sjls>a.svelte-a5sjls:hover{background-color:#6619ba}.popup-message.svelte-a5sjls.svelte-a5sjls{margin-bottom:.5em}.popup.svelte-a5sjls.svelte-a5sjls::after{content:'';position:absolute;width:1.5rem;height:1.58rem;background-color:white;bottom:-10%;right:20%;border-radius:1rem 0;z-index:-1}@media only screen and (min-width: 388px){.popup.svelte-a5sjls.svelte-a5sjls{width:14em}}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Goodmorning," } = $$props;
  let { message = "Shall we start with a story?" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  $$result.css.add(css$1);
  return `<dialog open class="svelte-a5sjls"><div class="popup svelte-a5sjls"><div class="heading-close svelte-a5sjls"><p>${escape(title)}</p> <form method="dialog" class="svelte-a5sjls"><button class="svelte-a5sjls">${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</button></form></div> <p class="popup-message svelte-a5sjls">${escape(message)}</p> <a href="/lessons" class="svelte-a5sjls" data-svelte-h="svelte-1gpljt6">Let&#39;s do it!</a></div> </dialog>`;
});
const css = {
  code: ":root{--image-width:30em;--text-font-size-large:2.25em;--text-font-size-small:0.625em;--max-image-width:18.125em}main.svelte-1b3qsoq.svelte-1b3qsoq{background:url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);background-size:cover;background-repeat:no-repeat;background-position:bottom;height:100vh;height:100dvh;width:100%;display:grid;grid-template-columns:auto;grid-template-rows:repeat(3, auto);grid-column-gap:0em;grid-row-gap:0em}article.svelte-1b3qsoq.svelte-1b3qsoq:first-of-type{grid-area:1 / 1 / 2 / 2;flex-direction:column;position:relative}article.svelte-1b3qsoq.svelte-1b3qsoq:nth-of-type(2){display:flex;flex-direction:column}article.svelte-1b3qsoq.svelte-1b3qsoq{display:flex;justify-content:center;align-items:center;color:white}article.svelte-1b3qsoq img.svelte-1b3qsoq{max-width:var(--max-image-width);display:flex;justify-content:center;align-items:center}article.svelte-1b3qsoq:first-of-type img.svelte-1b3qsoq{width:var(--image-width)}.progress-text.svelte-1b3qsoq.svelte-1b3qsoq{position:absolute;text-align:center;transform:translateY(20%)}article.svelte-1b3qsoq:first-of-type h1.svelte-1b3qsoq{font-size:var(--text-font-size-large);font-weight:400}article.svelte-1b3qsoq:first-of-type p.svelte-1b3qsoq:nth-of-type(2){font-size:var(--text-font-size-small)}",
  map: null
};
let currentPage = "home";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userState, $$unsubscribe_userState;
  $$unsubscribe_userState = subscribe(userState, (value) => $userState = value);
  let { data } = $$props;
  let profileId = $userState.profileId;
  let profiles = data.profiles;
  let selectedProfile = profiles.find((profile) => profile.id === profileId);
  let popupTitle = selectedProfile ? `Goodmorning ${selectedProfile.name_of_child},` : "Goodmorning,";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_userState();
  return `<main class="svelte-1b3qsoq">${validate_component(Menu, "Menu").$$render($$result, { currentPage }, {}, {})} <article class="svelte-1b3qsoq" data-svelte-h="svelte-9lt8zt"><img src="/progress.svg" alt="Progress bar" class="svelte-1b3qsoq"> <div class="progress-text svelte-1b3qsoq"><p class="svelte-1b3qsoq">Today&#39;s listening</p> <h1 class="svelte-1b3qsoq">00:00</h1> <p class="svelte-1b3qsoq">Of your 5-minute goal</p></div></article> <article class="svelte-1b3qsoq">${validate_component(Popup, "Popup").$$render($$result, { title: popupTitle }, {}, {})} <img src="/characters/Rat.svg" alt="Rat character" class="svelte-1b3qsoq"></article> </main>`;
});
export {
  Page as default
};
