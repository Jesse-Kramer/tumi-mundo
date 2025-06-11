import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "./ssr.js";
import "./client.js";
/* empty css                                        */
const css = {
  code: ":root{--small-space:var(--space-sm)}p.svelte-1al0dsq.svelte-1al0dsq{font-size:var(--font-size-sm)}.flex-items.svelte-1al0dsq.svelte-1al0dsq{display:flex;align-items:center}article.svelte-1al0dsq.svelte-1al0dsq{width:var(--article-width-large);height:var(--article-height-xlarge);display:grid;grid-template-columns:var(--grid-columns);grid-template-rows:var(--grid-rows);background-color:var(--color-bg);overflow:hidden;padding:var(--space-sm);border-radius:var(--border-radius);color:black;box-shadow:1px 3px 3px grey}.story-title.svelte-1al0dsq.svelte-1al0dsq{font-size:var(--font-size-sm);font-weight:var(--font-weight-bold);grid-area:1 / 2 / 2 / 6}.story-image.svelte-1al0dsq.svelte-1al0dsq{grid-area:1 / 1 / 4 / 2}.story-image.svelte-1al0dsq img.svelte-1al0dsq{max-width:var(--image-max-width);min-height:var(--image-min-height);object-fit:cover}.story-language.svelte-1al0dsq.svelte-1al0dsq{grid-area:1 / 5 / 2 / 6;justify-content:flex-end;gap:var(--space-sm)}.story-summary.svelte-1al0dsq.svelte-1al0dsq{grid-area:2 / 2 / 3 / 5;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;font-size:var(--font-size-xs)}.story-playtime.svelte-1al0dsq.svelte-1al0dsq{grid-area:3 / 2 / 4 / 5;gap:var(--space-sm);font-size:var(--font-size-xs)}.story-icons.svelte-1al0dsq.svelte-1al0dsq{grid-area:3 / 5 / 4 / 6;justify-content:flex-end;gap:var(--space-sm)}@media(min-width: 412px){article.svelte-1al0dsq.svelte-1al0dsq{width:var(--article-width-large)}}",
  map: null
};
const Story = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { story = {} } = $$props;
  const { image = "", title = "Untitled", summary = "No summary available", playtime = "Unknown", language = "unknown", audios = [] } = story;
  audios?.[0]?.file || null;
  if ($$props.story === void 0 && $$bindings.story && story !== void 0)
    $$bindings.story(story);
  $$result.css.add(css);
  return `<article class="svelte-1al0dsq"><picture class="story-image flex-items svelte-1al0dsq"><source srcset="${escape(image, true) + "?width=64&amp;format=avif"}" type="image/avif"> <source srcset="${escape(image, true) + "?width=64&amp;format=webp"}" type="image/webp"> <source srcset="${escape(image, true) + "?width=64"}" type="image/jpeg"> <img src="${escape(image, true) + "?width=64"}" alt="${escape(title, true) + " cover image"}" height="64" width="64" loading="lazy" class="svelte-1al0dsq"></picture> <h2 class="story-title svelte-1al0dsq">${escape(title)}</h2> <picture class="story-language flex-items svelte-1al0dsq"><img src="${"/languages/" + escape(language, true) + ".svg"}"${add_attribute("alt", language, 0)} height="17.59" width="17.58" loading="lazy"></picture> <p class="story-summary svelte-1al0dsq">${escape(summary)}</p> <div class="story-playtime flex-items svelte-1al0dsq">${story?.id ? `<a${add_attribute("href", `/story/${story.id}`, 0)}${add_attribute("aria-label", `Open story: ${title}`, 0)}>${validate_component(PlayStory, "PlayStory").$$render($$result, {}, {}, {})}</a>` : ``} <p class="svelte-1al0dsq">${escape(playtime)}</p></div> <div class="story-icons flex-items svelte-1al0dsq">${validate_component(Download, "Download").$$render($$result, {}, {}, {})} </div> </article>`;
});
const PlayStory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="#3A54DE"></circle><path d="M12.8159 9.79599C13.3367 9.39307 13.3367 8.6069 12.8159 8.20397C11.2422 6.98629 9.48494 6.02651 7.60988 5.36056L7.26734 5.2389C6.61199 5.00614 5.91977 5.44954 5.83105 6.12603C5.58317 8.01614 5.58317 9.98383 5.83105 11.8739C5.91977 12.5504 6.61199 12.9938 7.26733 12.7611L7.60988 12.6394C9.48494 11.9735 11.2422 11.0137 12.8159 9.79599Z" fill="white"></path></svg>`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6875 11.1094H12.6914C14.1416 11.1094 15.3281 10.5501 15.3281 9.11602C15.3281 7.6819 13.9307 7.17882 12.7969 7.12266C12.5625 4.87986 10.9248 3.51562 9 3.51562C7.18066 3.51562 6.00891 4.72298 5.625 5.92031C4.04297 6.07061 2.67188 6.86637 2.67188 8.51484C2.67188 10.1633 4.0957 11.1094 5.83594 11.1094H7.3125" stroke="#B0B0B0" stroke-width="0.84375" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.3125 12.7995L9 14.4843L10.6875 12.7995" stroke="#B0B0B0" stroke-width="0.84375" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 8.15625V14.0633" stroke="#B0B0B0" stroke-width="0.84375" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
export {
  Story as S
};
