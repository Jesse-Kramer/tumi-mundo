import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                      */
import { S as Story } from "../../../chunks/Download.js";
import { B as Back } from "../../../chunks/Back.js";
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seasons = [] } = $$props;
  let { languages = [] } = $$props;
  let { animals = [] } = $$props;
  let { selectedSeason = "" } = $$props;
  let { selectedLanguage = "" } = $$props;
  let { selectedAnimal = "" } = $$props;
  let { selectedSorting = "" } = $$props;
  let form;
  if ($$props.seasons === void 0 && $$bindings.seasons && seasons !== void 0)
    $$bindings.seasons(seasons);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0)
    $$bindings.languages(languages);
  if ($$props.animals === void 0 && $$bindings.animals && animals !== void 0)
    $$bindings.animals(animals);
  if ($$props.selectedSeason === void 0 && $$bindings.selectedSeason && selectedSeason !== void 0)
    $$bindings.selectedSeason(selectedSeason);
  if ($$props.selectedLanguage === void 0 && $$bindings.selectedLanguage && selectedLanguage !== void 0)
    $$bindings.selectedLanguage(selectedLanguage);
  if ($$props.selectedAnimal === void 0 && $$bindings.selectedAnimal && selectedAnimal !== void 0)
    $$bindings.selectedAnimal(selectedAnimal);
  if ($$props.selectedSorting === void 0 && $$bindings.selectedSorting && selectedSorting !== void 0)
    $$bindings.selectedSorting(selectedSorting);
  return `  <form method="GET"${add_attribute("this", form, 0)}><select name="season" id="season-select" aria-label="Choose a season"><option value="" data-svelte-h="svelte-1b8z3yg">Select a season</option>${each(seasons, (season) => {
    return `<option${add_attribute("value", season.season, 0)} ${selectedSeason === season.season ? "selected" : ""}>${escape(season.season)} </option>`;
  })}</select> <select name="language" id="language" aria-label="Choose a language"><option value="" data-svelte-h="svelte-1g1byyv">Select a language</option>${each(languages, (language) => {
    return `<option${add_attribute("value", language.language, 0)} ${selectedLanguage === language.language ? "selected" : ""}>${escape(language.language)} </option>`;
  })}</select> <select name="animal" id="animal" aria-label="Choose a animal"><option value="" data-svelte-h="svelte-v8sbt">Select a animal</option>${each(animals, (animal) => {
    return `<option${add_attribute("value", animal.animal, 0)} ${selectedAnimal === animal.animal ? "selected" : ""}>${escape(animal.animal)} </option>`;
  })}</select> <select name="sorting" id="sorting" aria-label="Choose a sorting"><option value="" data-svelte-h="svelte-ms4hmk">Sorting</option><option value="A-Z" ${selectedSorting === "A-Z" ? "selected" : ""}>From A - Z</option><option value="Z-A" ${selectedSorting === "Z-A" ? "selected" : ""}>From Z to A</option><option value="short-long" ${selectedSorting === "short-long" ? "selected" : ""}>Short to long playtime</option><option value="long-short" ${selectedSorting === "long-short" ? "selected" : ""}>Long to short playtime</option></select> ${`<button type="submit" data-svelte-h="svelte-1e6333e">Apply Filters</button>`}</form>`;
});
const css = {
  code: "main.svelte-dcpb3y.svelte-dcpb3y{background-image:var(--bg-image-purple);color:var(--color-white);min-height:100vh;padding:1em}.heading.svelte-dcpb3y.svelte-dcpb3y{display:flex;justify-content:space-between;align-items:center;margin-bottom:1em;position:relative}.heading.svelte-dcpb3y>h1.svelte-dcpb3y{position:absolute;left:50%;font-size:1.7em;transform:translateX(-50%)}.filters.svelte-dcpb3y.svelte-dcpb3y{display:grid;grid-template-columns:repeat(4, 1fr);gap:1em;margin-bottom:2em}.filters.svelte-dcpb3y form{display:contents}.filters.svelte-dcpb3y select{background-color:hsla(266, 72%, 35%, 1);color:var(--color-white);border:none;border-radius:0.25em;padding:0.2em 0.3em;font-size:1em;width:100%}.filters.svelte-dcpb3y option{color:black}.story-list.svelte-dcpb3y.svelte-dcpb3y{display:flex;justify-content:center;flex-wrap:wrap;gap:1em}.no-stories-message.svelte-dcpb3y.svelte-dcpb3y{color:var(--color-white);font-size:1.2em;text-align:center;width:100%;padding:2em}@media only screen and (max-width: 768px){.filters.svelte-dcpb3y.svelte-dcpb3y{grid-template-columns:repeat(2, 1fr)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stories;
  let seasons;
  let languages;
  let animals;
  let selectedSeason;
  let selectedLanguage;
  let selectedAnimal;
  let selectedSorting;
  let noStoriesFound;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ stories, seasons, languages, animals, selectedSeason, selectedLanguage, selectedAnimal, selectedSorting } = data);
  noStoriesFound = stories.length === 0;
  return `<main class="svelte-dcpb3y"><header><div class="heading svelte-dcpb3y"><a href="/lessons" aria-label="Go back to lessons">${validate_component(Back, "Back").$$render($$result, { color: "white" }, {}, {})}</a> <h1 class="svelte-dcpb3y" data-svelte-h="svelte-liinu0">All Stories</h1></div></header> <div class="filters svelte-dcpb3y">${validate_component(Filter, "Filter").$$render(
    $$result,
    {
      seasons,
      languages,
      animals,
      selectedSeason,
      selectedLanguage,
      selectedAnimal,
      selectedSorting
    },
    {},
    {}
  )}</div> <section class="story-list svelte-dcpb3y">${noStoriesFound ? `<p class="no-stories-message svelte-dcpb3y" data-svelte-h="svelte-xh5ap2">No stories found</p>` : `${each(stories, (story) => {
    return `${validate_component(Story, "Story").$$render($$result, { story }, {}, {})}`;
  })}`}</section> </main>`;
});
export {
  Page as default
};
