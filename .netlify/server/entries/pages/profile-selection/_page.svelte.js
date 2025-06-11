import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                      */
import { u as userState } from "../../../chunks/Account.js";
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6114 0.498947C13.4598 0.347365 13.2542 0.262207 13.0399 0.262207C12.8255 0.262207 12.6199 0.347365 12.4683 0.498947L2.56162 10.4056C2.46008 10.5072 2.38742 10.634 2.35112 10.7729L1.27342 14.8988C1.2009 15.1765 1.28101 15.4717 1.48392 15.6746C1.68682 15.8775 1.98209 15.9577 2.25973 15.8851L6.38565 14.8074C6.5246 14.7711 6.65137 14.6985 6.75292 14.5969L16.6596 4.69024C16.9753 4.37459 16.9753 3.86281 16.6596 3.54716L13.6114 0.498947ZM3.85978 11.3936L13.0399 2.21357L14.945 4.1187L5.76491 13.2988L3.18621 13.9723L3.85978 11.3936Z" fill="white"></path><path d="M1.60906 17.5055C1.16266 17.5055 0.800781 17.8674 0.800781 18.3138C0.800781 18.7602 1.16266 19.1221 1.60906 19.1221H17.7747C18.2211 19.1221 18.5829 18.7602 18.5829 18.3138C18.5829 17.8674 18.2211 17.5055 17.7747 17.5055H1.60906Z" fill="white"></path></svg>`;
});
const AddProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="104" height="104" viewBox="0 0 116 117" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_4992)"><circle cx="58" cy="58.3855" r="50" fill="#256783"></circle><rect x="54.4707" y="28.3855" width="7.05882" height="60" rx="3.52941" fill="white"></rect><rect x="88" y="54.8562" width="7.05882" height="60" rx="3.52941" transform="rotate(90 88 54.8562)" fill="white"></rect></g><defs><filter id="filter0_d_1_4992" x="0" y="0.385498" width="116" height="116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4992"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4992" result="shape"></feBlend></filter></defs></svg>`;
});
const css = {
  code: "main.svelte-1o8ekm9.svelte-1o8ekm9{background:var(--bg-image-blue);background-size:contain;background-repeat:no-repeat;background-position:bottom;height:100dvh;color:var(--color-white);margin:auto;padding:1em;padding-top:3em}.top-bar.svelte-1o8ekm9.svelte-1o8ekm9{display:flex;justify-content:space-between;align-items:flex-start;padding:0 1em}.top-bar.svelte-1o8ekm9 h1.svelte-1o8ekm9{flex-grow:1;text-align:center;font-size:1.5em}.edit-button.svelte-1o8ekm9.svelte-1o8ekm9{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.2em}.edit-button.svelte-1o8ekm9 p.svelte-1o8ekm9{font-size:0.9em;margin:0}ul.svelte-1o8ekm9.svelte-1o8ekm9{display:grid;grid-template-columns:repeat(auto-fill, minmax(150px, 1fr));grid-row-gap:5em;list-style:none;padding:0;margin:2em 0}li.svelte-1o8ekm9.svelte-1o8ekm9{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5em}li.svelte-1o8ekm9 button img.svelte-1o8ekm9{width:6.5em;height:6.5em;border-radius:50%;object-fit:cover}button.svelte-1o8ekm9.svelte-1o8ekm9{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}h1.svelte-1o8ekm9.svelte-1o8ekm9{font-size:1.25em;text-align:center;margin-bottom:1em}h2.svelte-1o8ekm9.svelte-1o8ekm9{font-size:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userState, $$unsubscribe_userState;
  $$unsubscribe_userState = subscribe(userState, (value) => $userState = value);
  let { data } = $$props;
  let profiles = data.profiles || [];
  let profileUsers = data.profileUsers || [];
  let userId = $userState.userId;
  let filteredProfiles = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      if (userId) {
        filteredProfiles = profiles.filter((profile) => {
          return profileUsers.some((profileUser) => profileUser.user_id === userId && profileUser.profile_id === profile.id);
        });
      }
    }
  }
  $$unsubscribe_userState();
  return `<main class="svelte-1o8ekm9"><section class="top-bar svelte-1o8ekm9"><h1 class="svelte-1o8ekm9" data-svelte-h="svelte-1yrm9ir">Select account</h1> <button class="edit-button svelte-1o8ekm9">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})} <p class="svelte-1o8ekm9" data-svelte-h="svelte-1927pqg">Edit</p></button></section> <ul class="svelte-1o8ekm9">${each(filteredProfiles, (profile) => {
    return `<li class="svelte-1o8ekm9"><button class="svelte-1o8ekm9"><img${add_attribute("src", profile.avatar, 0)} alt="${"Profile avatar of " + escape(profile.name_of_child, true)}" class="svelte-1o8ekm9"> <h2 class="svelte-1o8ekm9">${escape(profile.name_of_child)}</h2></button> </li>`;
  })} <li class="svelte-1o8ekm9"><a href="/">${validate_component(AddProfile, "AddProfile").$$render($$result, {}, {}, {})} <h2 class="svelte-1o8ekm9" data-svelte-h="svelte-6dp9k">Add profile</h2></a></li></ul> </main>`;
});
export {
  Page as default
};
