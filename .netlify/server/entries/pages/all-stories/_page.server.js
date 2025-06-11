import { e as error } from "../../../chunks/index.js";
import { f as fetchAllData, a as fetchAnimals, b as fetchSeasons, m as mapStoriesWithDetails, S as SeasonDetailInStories, A as AnimalDetailInStories } from "../../../chunks/api.js";
let csr = true;
async function load({ fetch, url }) {
  try {
    const [data, animalData, seasonsData] = await Promise.all([
      fetchAllData(fetch),
      fetchAnimals(fetch),
      fetchSeasons(fetch)
    ]);
    let storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);
    storiesWithDetails = SeasonDetailInStories(storiesWithDetails, seasonsData.seasons);
    storiesWithDetails = AnimalDetailInStories(storiesWithDetails, animalData);
    const selectedSeason = url.searchParams.get("season") || "";
    const selectedLanguage = url.searchParams.get("language") || "";
    const selectedAnimal = url.searchParams.get("animal") || "";
    const selectedSorting = url.searchParams.get("sorting") || "";
    const filteredStories = storiesWithDetails.filter(
      (story) => (!selectedSeason || story.season === selectedSeason) && (!selectedLanguage || story.language === selectedLanguage) && (!selectedAnimal || story.animal === selectedAnimal)
    );
    const sortingOptions = {
      "A-Z": (a, b) => a.title.localeCompare(b.title),
      "Z-A": (a, b) => b.title.localeCompare(a.title),
      "short-long": (a, b) => a.playtimeSeconds - b.playtimeSeconds,
      "long-short": (a, b) => b.playtimeSeconds - a.playtimeSeconds
    };
    if (selectedSorting && sortingOptions[selectedSorting]) {
      filteredStories.sort(sortingOptions[selectedSorting]);
    }
    return {
      stories: filteredStories,
      animals: animalData,
      languages: data.languages,
      seasons: seasonsData.seasons,
      selectedSeason,
      selectedLanguage,
      selectedAnimal,
      selectedSorting
    };
  } catch (err) {
    console.error("Error loading data:", err);
    throw error(500, {
      message: err.message
    });
  }
}
export {
  csr,
  load
};
