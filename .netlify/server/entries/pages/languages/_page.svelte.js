import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                      */
import { C as ContinueBtn } from "../../../chunks/ContinueBtn.js";
import { B as Back } from "../../../chunks/Back.js";
const css$1 = {
  code: ".search-container.svelte-a2qe15{width:100%;max-width:31.25em;margin:auto;contain:inline-size}.search.svelte-a2qe15{background-image:url(/icons/search-icon.svg);background-repeat:no-repeat;background-position:2% 50%;padding:.8em 1.8em;border-radius:.5em;border:none;width:100%;max-width:31.25em;margin:.6em auto;box-sizing:border-box}div.svelte-a2qe15{width:100%;max-width:28.75em;margin:.6em auto;box-sizing:border-box;font-size:1em;transition:width 0.3s ease, font-size 0.3s ease}@container (max-width: 300px){.search.svelte-a2qe15{width:2.5em;padding:.8em;font-size:0;background-position:center}}@media(max-width: 300px){.search-container.svelte-a2qe15{max-width:18.75em}.search.svelte-a2qe15{width:2.5em;padding:.8em;font-size:0;background-position:center}}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  let { data = [] } = $$props;
  let { searchTerm = "" } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.searchTerm === void 0 && $$bindings.searchTerm && searchTerm !== void 0)
    $$bindings.searchTerm(searchTerm);
  $$result.css.add(css$1);
  filteredData = searchTerm ? data.filter((item) => item.language.toLowerCase().includes(searchTerm.toLowerCase())) : data;
  {
    dispatch("filter", filteredData);
  }
  return `<div class="search-container svelte-a2qe15"> <form action="/languages" method="GET"><input type="text" id="searchbar" placeholder="Search..." class="search svelte-a2qe15" name="search" aria-label="Search for languages"${add_attribute("value", searchTerm, 0)}></form> </div>`;
});
const css = {
  code: 'main.svelte-1ukf3na.svelte-1ukf3na{background:var(--bg-image-blue);background-size:contain;background-repeat:no-repeat;background-position:bottom;height:100dvh;color:var(--color-white);overflow:hidden}.navigation.svelte-1ukf3na.svelte-1ukf3na{display:flex;flex-direction:row;justify-content:space-evenly;width:100%}.navigation.svelte-1ukf3na>a.svelte-1ukf3na{align-self:start}img.svelte-1ukf3na.svelte-1ukf3na{aspect-ratio:3 / 2;width:100%}section.svelte-1ukf3na.svelte-1ukf3na{display:flex;flex-direction:column;justify-content:space-between;height:100dvh;align-items:center;padding:1.25em;position:relative}h1.svelte-1ukf3na.svelte-1ukf3na{margin-bottom:1em}h1.svelte-1ukf3na.svelte-1ukf3na,p.svelte-1ukf3na.svelte-1ukf3na,input.svelte-1ukf3na.svelte-1ukf3na{width:100%}ul.svelte-1ukf3na.svelte-1ukf3na{width:100%;height:70vh;display:flex;flex-direction:column;overflow-y:auto;margin-bottom:1em;flex-grow:1}h1.svelte-1ukf3na.svelte-1ukf3na,p.svelte-1ukf3na.svelte-1ukf3na{text-align:center}p.svelte-1ukf3na.svelte-1ukf3na{margin-bottom:2.5em}.line.svelte-1ukf3na.svelte-1ukf3na{margin-top:0.625em;margin-bottom:0.625em;border-radius:0.125em;background-color:hsla(197, 38%, 72%, 1);height:1px;width:100%}.radio.svelte-1ukf3na.svelte-1ukf3na{width:100%}input[type="checkbox"].svelte-1ukf3na.svelte-1ukf3na:not(:checked),input[type="checkbox"].svelte-1ukf3na.svelte-1ukf3na:checked{position:absolute;left:-9999%}input[type="checkbox"].svelte-1ukf3na+label.svelte-1ukf3na{display:inline-block;color:black;background-color:var(--color-white);list-style:none;align-self:self-end;margin-bottom:0.125em;padding:0.3125em;width:100%;border-radius:0.625em}input[type="checkbox"].svelte-1ukf3na:checked+label.svelte-1ukf3na{color:var(--color-white);background-color:hsla(241, 71%, 32%, 1)}label.svelte-1ukf3na.svelte-1ukf3na{position:relative;display:inline-block;height:3.75em;width:100%}.flag-svg.svelte-1ukf3na.svelte-1ukf3na{position:absolute;top:50%;left:0.3125em;transform:translateY(-50%);width:3.4375em;height:100%}.language-strong.svelte-1ukf3na.svelte-1ukf3na{position:absolute;top:50%;left:4.0625em;transform:translateY(-50%)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = { languages: [] } } = $$props;
  let filteredLanguages = data.languages;
  let searchTerm = "";
  data.languages.forEach((language) => {
    language.name = language.language;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="svelte-1ukf3na"><section class="svelte-1ukf3na"><nav class="navigation svelte-1ukf3na"><a href="/onboarding" aria-label="Go back to onboarding" class="svelte-1ukf3na">${validate_component(Back, "Back").$$render($$result, { color: "white" }, {}, {})}</a> <h1 class="svelte-1ukf3na" data-svelte-h="svelte-1o4n8ta">We are going to learn!</h1></nav> <p class="svelte-1ukf3na" data-svelte-h="svelte-11wgkn9">Now it is time to pick the language(s) your child will learn.
            You can pick a <strong>maximum of 3</strong> languages.</p> ${validate_component(Search, "Search").$$render(
      $$result,
      { data: data.languages, searchTerm },
      {
        searchTerm: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="line svelte-1ukf3na"> ${filteredLanguages.length > 0 ? `<ul class="svelte-1ukf3na">${each(filteredLanguages, (language) => {
      return `<li class="languages"><input class="radio svelte-1ukf3na" type="checkbox" id="${"language-" + escape(language.language, true)}" name="language"${add_attribute("value", language.language, 0)}> <label for="${"language-" + escape(language.language, true)}" class="svelte-1ukf3na"><img src="${"/languages/" + escape(language.language, true) + ".svg"}" alt="${escape(language.language, true) + " flag"}" class="flag-svg svelte-1ukf3na" height="55" width="66"> <strong class="language-strong svelte-1ukf3na">${escape(language.language)}</strong></label> </li>`;
    })}</ul>` : `<p class="svelte-1ukf3na" data-svelte-h="svelte-cvlfua">No languages found.</p>`} ${validate_component(ContinueBtn, "Button").$$render($$result, { type: "input", variant: "secondary" }, {}, {})}</section> </main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
