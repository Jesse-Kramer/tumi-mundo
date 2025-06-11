import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as each, e as escape, f as createEventDispatcher } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { w as writable } from "../../../chunks/index2.js";
/* empty css                                                      */
import { I as Input } from "../../../chunks/Input.js";
import { S as Story } from "../../../chunks/Download.js";
import { M as Menu } from "../../../chunks/Profile.js";
import { B as Back } from "../../../chunks/Back.js";
const css$5 = {
  code: ".error.svelte-1e2dlop.svelte-1e2dlop{color:#b60000;font-size:1em;margin-top:1em;text-align:center}.success.svelte-1e2dlop.svelte-1e2dlop{color:#256639;font-size:1em;margin-top:2em;text-align:center}.story-item.svelte-1e2dlop.svelte-1e2dlop{display:flex}.story-list.svelte-1e2dlop.svelte-1e2dlop{display:grid;grid-template-rows:repeat(3, auto);max-height:16em;overflow-y:auto;flex-grow:1;max-height:40vh;min-height:10em;overflow-y:auto;padding-bottom:1em;text-align:left}.popup.svelte-1e2dlop.svelte-1e2dlop{background-color:rgba(0, 0, 0, 0.8);opacity:0;visibility:hidden;transition:all 0.3s;position:fixed;top:50%;left:50%;display:flex;transform:translate(-50%, -50%);width:100%;height:110vh;border:none;box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);z-index:9999}.popup__content.svelte-1e2dlop.svelte-1e2dlop{transform:translate(-50%, -50%);text-align:center;background-color:#fff;padding:1em;width:30em;position:fixed;top:50%;left:50%;height:80%;max-height:90%;overflow:hidden;border:none;border-radius:var(--border-radius);box-shadow:0px 4px 10px rgba(0, 0, 0, 0.1);z-index:10000;position:relative}li.svelte-1e2dlop.svelte-1e2dlop{margin-bottom:.2em}h3.svelte-1e2dlop.svelte-1e2dlop,p.svelte-1e2dlop.svelte-1e2dlop{text-align:left}h3.svelte-1e2dlop.svelte-1e2dlop{font-size:1.2em}.buttons-container.svelte-1e2dlop.svelte-1e2dlop{display:flex;justify-content:center;gap:.5em;position:absolute;bottom:1rem;right:1rem}.close-button.svelte-1e2dlop.svelte-1e2dlop,.create-button.svelte-1e2dlop.svelte-1e2dlop{padding:.5em;border-radius:var(--border-radius);font-size:1em;border:none;display:flex;align-items:center;gap:.2em;box-shadow:1px 3px 3px grey}.close-button.svelte-1e2dlop.svelte-1e2dlop{color:black;background-color:#fff}.create-button.svelte-1e2dlop.svelte-1e2dlop{color:white;background-color:#256639}@media(max-width: 75em){.popup__content.svelte-1e2dlop.svelte-1e2dlop{width:60%;max-width:none}}@media(max-width: 56.25em){.popup__content.svelte-1e2dlop.svelte-1e2dlop{width:70%}}@media(max-width: 37.5em){.popup__content.svelte-1e2dlop.svelte-1e2dlop{width:96%}}.popup.svelte-1e2dlop.svelte-1e2dlop:target{opacity:1;visibility:visible}.popup.svelte-1e2dlop:target .popup__content.svelte-1e2dlop{opacity:1}@media only screen and (min-width: 600px){.story-list.svelte-1e2dlop.svelte-1e2dlop{height:15em}}@media only screen and (max-width: 600px){.story-list.svelte-1e2dlop.svelte-1e2dlop{min-height:12em}}",
  map: null
};
const MakePlaylist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stories;
  let noStoriesFound;
  let $selectedLanguage, $$unsubscribe_selectedLanguage;
  let $selectedStories, $$unsubscribe_selectedStories;
  let { data } = $$props;
  let errors = {};
  let values = {};
  let formElement;
  let selectedLanguage = writable("languages");
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => $selectedLanguage = value);
  let selectedStories = writable([]);
  $$unsubscribe_selectedStories = subscribe(selectedStories, (value) => $selectedStories = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$5);
  stories = $selectedLanguage !== "languages" ? data.stories.filter((story) => story.language && story.language.toLowerCase() === $selectedLanguage.toLowerCase()) : data.stories;
  noStoriesFound = stories.length === 0;
  $$unsubscribe_selectedLanguage();
  $$unsubscribe_selectedStories();
  return `<dialog class="popup svelte-1e2dlop" id="popup"><div class="popup__content svelte-1e2dlop"><h2 data-svelte-h="svelte-1eoeqne">Make a playlist!</h2> <form action="?/createPlaylist" class="form" method="POST" novalidate${add_attribute("this", formElement, 0)}>${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "Name",
      type: "text",
      placeholder: "Playlist name",
      value: values.title || "",
      error: errors.title
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "Description",
      type: "text",
      placeholder: "Playlist description",
      value: values.description || "",
      error: errors.description
    },
    {},
    {}
  )} <h3 class="svelte-1e2dlop" data-svelte-h="svelte-17z9vgc">Add stories</h3> <p class="svelte-1e2dlop" data-svelte-h="svelte-2ru92j">Click on the + to add story to playlist</p> <section class="story-list svelte-1e2dlop"><ul>${noStoriesFound ? `<p class="no-stories-message svelte-1e2dlop" data-svelte-h="svelte-xh5ap2">No stories found</p>` : `${each(stories, (story) => {
    return `<li class="svelte-1e2dlop"><div class="story-item svelte-1e2dlop">${validate_component(Story, "Story").$$render($$result, { story }, {}, {})} ${validate_component(AddStory, "AddStory").$$render(
      $$result,
      {
        storyId: story.id,
        checked: $selectedStories.includes(story.id)
      },
      {},
      {}
    )}</div> </li>`;
  })}`}</ul></section> ${errors.stories ? `<span class="error svelte-1e2dlop">${escape(errors.stories)}</span>` : ``} ${``} <div class="buttons-container svelte-1e2dlop"><a href="#create-playlist" class="close-button svelte-1e2dlop">Cancel ${validate_component(SmallCross, "SmallCross").$$render($$result, {}, {}, {})}</a> <button type="submit" class="create-button svelte-1e2dlop">Create ${validate_component(Check, "Check").$$render($$result, {}, {}, {})}</button></div></form></div> </dialog>`;
});
const css$4 = {
  code: "nav.svelte-xk5nzg.svelte-xk5nzg{display:flex;margin-top:var(--space-md);align-items:center;justify-content:center}nav.svelte-xk5nzg>ul.svelte-xk5nzg{display:flex;margin:0 var(--space-lg)}nav.svelte-xk5nzg>button.svelte-xk5nzg{border:none;border-radius:var(--border-radius);padding:var(--space-sm);height:2em;width:3em;display:flex;align-items:center;justify-content:center;background-color:#9264F4}input[type=radio].svelte-xk5nzg.svelte-xk5nzg{height:1.2em;width:1.2em;margin:var(--space-sm);padding:var(--space-md)}.story-list.svelte-xk5nzg.svelte-xk5nzg{margin:var(--space-md)}.story-list.svelte-xk5nzg>li.svelte-xk5nzg{scroll-snap-align:center}.story-list.svelte-xk5nzg.svelte-xk5nzg{display:grid;grid-auto-flow:column;grid-template-rows:var(--grid-rows);gap:var(--space-xs);overflow-x:auto;scroll-snap-type:x mandatory;padding:var(--space-md) 0;width:24em;box-sizing:border-box}@media only screen and (min-width: 800px){.story-list.svelte-xk5nzg.svelte-xk5nzg{grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(4, auto);width:48em}}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let storyList;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$4);
  return `<section class="all-stories"><ul class="story-list svelte-xk5nzg"${add_attribute("this", storyList, 0)}>${each(data.stories, (story) => {
    return `<li class="svelte-xk5nzg">${validate_component(Story, "Story").$$render($$result, { story }, {}, {})} </li>`;
  })}</ul> <nav class="carousel-nav svelte-xk5nzg"><button aria-label="Previous" class="svelte-xk5nzg">${validate_component(Back, "Back").$$render($$result, { color: "white" }, {}, {})}</button> <ul class="svelte-xk5nzg" data-svelte-h="svelte-nes860"><li><input type="radio" aria-label="nav-button" class="svelte-xk5nzg"></li> <li><input type="radio" aria-label="nav-button" class="svelte-xk5nzg"></li> <li><input type="radio" aria-label="nav-button" class="svelte-xk5nzg"></li></ul> <button aria-label="Next" class="svelte-xk5nzg">${validate_component(Back, "Back").$$render($$result, { color: "white", flipped: true }, {}, {})}</button></nav> </section>`;
});
const css$3 = {
  code: ".story-checkbox.svelte-ljl8ls.svelte-ljl8ls.svelte-ljl8ls{cursor:pointer;display:flex;align-items:center}.story-checkbox.svelte-ljl8ls input.svelte-ljl8ls.svelte-ljl8ls{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-custom.svelte-ljl8ls.svelte-ljl8ls.svelte-ljl8ls{display:inline-block;width:14px;height:14px;margin-left:1em;position:relative}.story-checkbox.svelte-ljl8ls input.svelte-ljl8ls:focus+.checkbox-custom.svelte-ljl8ls{outline:2px solid #256639;border-radius:50%}.story-checkbox.svelte-ljl8ls input.svelte-ljl8ls:checked+.checkbox-custom.svelte-ljl8ls{background-color:#256639;border-radius:50%}.story-checkbox.svelte-ljl8ls input:checked+.checkbox-custom svg.svelte-ljl8ls.svelte-ljl8ls{display:none}.story-checkbox.svelte-ljl8ls input.svelte-ljl8ls:checked+.checkbox-custom.svelte-ljl8ls::after{content:'';position:absolute;display:block;left:4px;top:2px;width:4px;height:7px;border:solid white;border-width:0 2px 2px 0;transform:rotate(45deg)}",
  map: null
};
const AddStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { storyId } = $$props;
  let { checked = false } = $$props;
  createEventDispatcher();
  if ($$props.storyId === void 0 && $$bindings.storyId && storyId !== void 0)
    $$bindings.storyId(storyId);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$3);
  return `<label class="story-checkbox svelte-ljl8ls"><input type="checkbox" name="stories"${add_attribute("value", storyId, 0)} tabindex="0" ${checked ? "checked" : ""} class="svelte-ljl8ls"> <span class="checkbox-custom svelte-ljl8ls" data-svelte-h="svelte-fjtfca"><svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ljl8ls"><circle cx="6" cy="6" r="5.5" stroke="#B0B0B0"></circle><rect x="3" y="5.57141" width="6" height="0.857143" rx="0.428571" fill="#B0B0B0"></rect><rect x="6.42871" y="3" width="6" height="0.857143" rx="0.428571" transform="rotate(90 6.42871 3)" fill="#B0B0B0"></rect></svg></span> </label>`;
});
const css$2 = {
  code: ":root{--small-space:.5em;--color-text:black}.playlist-card.svelte-536ryh.svelte-536ryh{display:flex;flex-direction:column;justify-content:space-between;width:10em;height:16em;background-color:#fff;border-radius:0.5em;padding:0.5em;color:black;box-shadow:0 0 5px rgba(0,0,0,0.1)}.image-container.svelte-536ryh.svelte-536ryh{width:100%;aspect-ratio:1 / 1;overflow:hidden;border-radius:0.5em}.image-container.svelte-536ryh img.svelte-536ryh{width:100%;height:100%;object-fit:cover}.playlist-title.svelte-536ryh.svelte-536ryh{font-size:0.85em;font-weight:600;margin-top:0.4em;margin-bottom:0.4em;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.card-bottom.svelte-536ryh.svelte-536ryh{display:flex;justify-content:space-between;align-items:center}.playlist-playtime.svelte-536ryh.svelte-536ryh{display:flex;align-items:center;gap:0.25em;font-size:0.75em}.playlist-icons.svelte-536ryh.svelte-536ryh{background:none;border:none;cursor:pointer;padding:0}@keyframes svelte-536ryh-scale{0%,100%{transform:scale(1)}50%{transform:scale(1.4)}}.svelte-536ryh.svelte-536ryh::view-transition-old(playlist-title-*),.svelte-536ryh.svelte-536ryh::view-transition-new(playlist-title-*){animation:svelte-536ryh-fade-slide 0.4s ease}@keyframes svelte-536ryh-fade-slide{from{opacity:0;transform:translateY(0.5em)}to{opacity:1;transform:translateY(0)}}",
  map: null
};
let profileId = 122;
const Playlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playlist } = $$props;
  const { image, title, playtime, isLiked: initialIsLiked, likeId: initialLikeId } = playlist;
  let isLiked = initialIsLiked;
  let existingLikeId = initialLikeId;
  createEventDispatcher();
  if ($$props.playlist === void 0 && $$bindings.playlist && playlist !== void 0)
    $$bindings.playlist(playlist);
  $$result.css.add(css$2);
  return `<article class="playlist-card svelte-536ryh"><div class="image-container svelte-536ryh"><picture class="svelte-536ryh"><source srcset="${escape(image, true) + "?width=256&amp;format=avif"}" type="image/avif" class="svelte-536ryh"> <source srcset="${escape(image, true) + "?width=256&amp;format=webp"}" type="image/webp" class="svelte-536ryh"> <img src="${escape(image, true) + "?width=256"}"${add_attribute("alt", title, 0)} style="${"view-transition-name:playlist-image-" + escape(playlist.id, true) + ";"}" class="svelte-536ryh"></picture></div> <h3 class="playlist-title svelte-536ryh" style="${"view-transition-name:playlist-title-" + escape(playlist.id, true) + ";"}"><a${add_attribute("href", `/playlist/${playlist.id}`, 0)} aria-label="Go to playlist" class="svelte-536ryh">${escape(title)}</a></h3> <div class="card-bottom svelte-536ryh"><div class="playlist-playtime flex-items svelte-536ryh" style="${"view-transition-name:playlist-play-" + escape(playlist.id, true) + ";"}">${validate_component(Play, "Play").$$render($$result, {}, {}, {})} <p class="svelte-536ryh">${escape(playtime)}</p></div> <form action="/like" method="POST" class="svelte-536ryh">${isLiked ? `<input type="hidden" name="likeId"${add_attribute("value", existingLikeId, 0)} class="svelte-536ryh"> <input type="hidden" name="_method" value="DELETE" class="svelte-536ryh">` : `<input type="hidden" name="playlistId"${add_attribute("value", playlist.id, 0)} class="svelte-536ryh"> <input type="hidden" name="profileId"${add_attribute("value", profileId, 0)} class="svelte-536ryh">`} <button type="submit" class="playlist-icons svelte-536ryh"${add_attribute("aria-label", isLiked ? "Unlike" : "Like", 0)} style="${"view-transition-name:playlist-like-" + escape(playlist.id, true) + ";"}">${validate_component(LikeButton, "LikeButton").$$render($$result, { isLiked }, {}, {})}</button></form></div> </article>`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#F3A22A"></circle><path d="M17.0874 13.0613C17.7817 12.5241 17.7817 11.4759 17.0874 10.9387C14.9891 9.31508 12.6461 8.03537 10.146 7.14743L9.68929 6.98522C8.8155 6.67488 7.89254 7.26607 7.77425 8.16805C7.44374 10.6882 7.44374 13.3118 7.77425 15.8319C7.89254 16.7339 8.8155 17.3251 9.68929 17.0148L10.146 16.8526C12.6461 15.9646 14.9891 14.6849 17.0874 13.0613Z" fill="white"></path></svg>`;
});
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="80" height="80" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" width="8" height="68" rx="4" fill="white"></rect><rect x="68" y="30" width="8" height="68" rx="4" transform="rotate(90 68 30)" fill="white"></rect></svg>`;
});
const css$1 = {
  code: ".liked.svelte-dpata6{fill:#F33232;stroke:#F33232;animation:svelte-dpata6-scale 0.5s ease-in}@keyframes svelte-dpata6-scale{0%,100%{transform:scale(1)}50%{transform:scale(1.4)}}",
  map: null
};
const LikeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLiked = false } = $$props;
  if ($$props.isLiked === void 0 && $$bindings.isLiked && isLiked !== void 0)
    $$bindings.isLiked(isLiked);
  $$result.css.add(css$1);
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="${["svelte-dpata6", isLiked ? "liked" : ""].join(" ").trim()}"><path d="M11.6536 7.15238C11.8471 7.33832 12.1529 7.33832 12.3464 7.15238C13.1829 6.34871 14.326 5.75 15.6 5.75C18.1489 5.75 20.25 7.64769 20.25 10.0298C20.25 11.7261 19.4577 13.1809 18.348 14.428C17.2397 15.6736 15.7972 16.7316 14.4588 17.6376L12.1401 19.207C12.0555 19.2643 11.9445 19.2643 11.8599 19.207L9.54125 17.6376C8.20278 16.7316 6.76035 15.6736 5.65201 14.428C4.54225 13.1809 3.75 11.7261 3.75 10.0298C3.75 7.64769 5.85106 5.75 8.4 5.75C9.67403 5.75 10.8171 6.34871 11.6536 7.15238Z" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 4.5L6 12.5L3 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SmallCross = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 12L4.5 5" stroke="#D51D1D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 5L4.5 12" stroke="#D51D1D" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const css = {
  code: ":root{margin:0;padding:0;box-sizing:border-box}main.svelte-10sfiwb.svelte-10sfiwb{height:100%;color:var(--color-text-light);background-image:var(--bg-image-purple);display:flex;flex-direction:column;padding-bottom:5em}section.svelte-10sfiwb.svelte-10sfiwb{padding:var(--space-md)}h1.svelte-10sfiwb.svelte-10sfiwb{margin-top:var(--space-lg);margin-bottom:var(--space-md)}h2.svelte-10sfiwb.svelte-10sfiwb{font-size:var(--font-size-lg);margin-bottom:var(--space-sm)}header.svelte-10sfiwb.svelte-10sfiwb{margin-bottom:var(--space-lg);display:flex;flex-direction:column;align-items:center}.create-playlist.svelte-10sfiwb.svelte-10sfiwb{display:flex;flex-direction:column;justify-content:center;align-items:center;width:10em;height:16em;background-color:#fff;border-radius:0.5em;padding:0.5em;color:black;box-shadow:0 0 5px rgba(0,0,0,0.1);& a{\n        color: white;\n    };& h3{\n        margin-top: 1em;\n        font-size: 1em;\n        font-weight: bold;\n        margin-bottom: 1em;\n    };& small{\n        margin-top: auto;\n    }}.playlist-1>a.svelte-10sfiwb small.svelte-10sfiwb{color:var(--color-text);display:flex;align-items:center;justify-content:center}.own-playlist.svelte-10sfiwb.svelte-10sfiwb{display:flex;flex-direction:column}.all-stories.svelte-10sfiwb.svelte-10sfiwb{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:31.25em }.all-stories.svelte-10sfiwb>h2.svelte-10sfiwb{align-self:start;margin:0}nav.svelte-10sfiwb.svelte-10sfiwb{display:flex;margin-top:var(--space-md);align-items:center;justify-content:center}.language-filter.svelte-10sfiwb.svelte-10sfiwb{display:flex;align-items:center;width:100%}.language-filter.svelte-10sfiwb>a.svelte-10sfiwb{margin-left:auto;color:var(--color-white)}.language-filter.svelte-10sfiwb>a.svelte-10sfiwb:hover{text-decoration:underline}label.svelte-10sfiwb.svelte-10sfiwb{display:flex;align-items:center;padding:var(--space-xs);padding-right:var(--space-sm);background-color:hsla(263, 21%, 62%, 1);color:var(--color-text);border-radius:var(--border-radius)}label.svelte-10sfiwb.svelte-10sfiwb:nth-of-type(1){margin-right:var(--space-md)}input[type=checkbox].svelte-10sfiwb.svelte-10sfiwb{opacity:0;position:absolute}input[type=checkbox].svelte-10sfiwb:checked+label.svelte-10sfiwb{background-color:var(--color-text-light);font-weight:var(--font-weight-bold)}label.svelte-10sfiwb>img.svelte-10sfiwb{height:1.5em;width:auto;margin-right:var(--space-sm)}.create-playlist.svelte-10sfiwb.svelte-10sfiwb{background-color:hsla(248, 27%, 36%, 1);text-align:center;color:var(--color-text-light)}.playlist-list.svelte-10sfiwb.svelte-10sfiwb{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-lg);overflow-x:auto;padding-bottom:var(--space-md);scroll-snap-type:x mandatory}.playlist-scroll-list.svelte-10sfiwb.svelte-10sfiwb{display:flex;flex-direction:row ;gap:1em}@media only screen and (min-width: 600px){main.svelte-10sfiwb.svelte-10sfiwb{align-items:center}}",
  map: null
};
let currentPage = "lessons";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-10sfiwb">${validate_component(Menu, "Menu").$$render($$result, { currentPage }, {}, {})} <header class="svelte-10sfiwb" data-svelte-h="svelte-3xm2sk"><h1 class="svelte-10sfiwb">Lessons</h1> <ul><li>1. Listening</li></ul></header> <section class="own-playlist svelte-10sfiwb"><h2 class="svelte-10sfiwb" data-svelte-h="svelte-gfbp3">Own playlists</h2> <div class="playlist-list svelte-10sfiwb"><ul class="playlist-scroll-list svelte-10sfiwb"><li class="create-playlist svelte-10sfiwb"><a href="#popup" class="svelte-10sfiwb">${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})} <h3 data-svelte-h="svelte-1xnmqh">Make a playlist</h3> <small class="svelte-10sfiwb" data-svelte-h="svelte-udyg9q">Add your favorite stories in one playlist</small></a></li> ${each(data.playlists.slice().reverse(), (playlist) => {
    return `<li>${validate_component(Playlist, "Playlist").$$render($$result, { playlist }, {}, {})} </li>`;
  })}</ul></div></section> ${validate_component(MakePlaylist, "MakePlaylist").$$render($$result, { data }, {}, {})} <section class="all-stories svelte-10sfiwb"><h2 class="svelte-10sfiwb" data-svelte-h="svelte-1ls4oqw">All stories</h2> <nav class="language-filter svelte-10sfiwb" data-svelte-h="svelte-1m5tt4b"><label for="checkbox-nl" class="svelte-10sfiwb"><img src="/languages/Dutch.svg" alt="dutch" width="20" height="20" class="svelte-10sfiwb">Dutch</label> <input type="checkbox" id="checkbox-nl" class="svelte-10sfiwb"> <label for="checkbox-en" class="svelte-10sfiwb"><img src="/languages/English.svg" alt="english" width="20" height="20" class="svelte-10sfiwb">English</label> <input type="checkbox" id="checkbox-en" class="svelte-10sfiwb"> <a href="/all-stories" class="svelte-10sfiwb">Show all</a></nav> ${validate_component(Carousel, "Carousel").$$render($$result, { data }, {}, {})}</section> <section class="own-playlist svelte-10sfiwb"><h2 class="svelte-10sfiwb" data-svelte-h="svelte-y1l45w">Liked playlists</h2> <div class="playlist-list svelte-10sfiwb"><ul class="playlist-scroll-list svelte-10sfiwb">${each(data.playlists.filter((playlist) => playlist.isLiked), (playlist) => {
    return `<li>${validate_component(Playlist, "Playlist").$$render($$result, { playlist }, {}, {})}</li>`;
  })}</ul></div></section> <section class="own-playlist suggested-playlist svelte-10sfiwb"><h2 class="svelte-10sfiwb" data-svelte-h="svelte-1y72kj6">Suggested playlists</h2> <div class="playlist-list svelte-10sfiwb"><ul class="playlist-scroll-list svelte-10sfiwb">${each(data.playlists.filter((playlist) => !playlist.isLiked), (playlist) => {
    return `<li>${validate_component(Playlist, "Playlist").$$render($$result, { playlist }, {}, {})}</li>`;
  })}</ul></div></section> </main>`;
});
export {
  Page as default
};
