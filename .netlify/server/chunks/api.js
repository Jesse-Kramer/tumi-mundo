import { createDirectus, rest, readItems, readItem, createItem, deleteItem } from "@directus/sdk";
import { P as PUBLIC_APIURL } from "./public.js";
function getDirectusInstance(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(PUBLIC_APIURL, options).with(rest());
  return directus;
}
const assetBaseUrl = `${PUBLIC_APIURL}/assets/`;
async function fetchCollection(fetch, collectionName, id = null) {
  const directus = getDirectusInstance(fetch);
  if (id && typeof id === "object" && !Array.isArray(id)) {
    return await directus.request(readItems(collectionName, id));
  }
  if (id) {
    return await directus.request(readItem(collectionName, id));
  }
  return await directus.request(readItems(collectionName));
}
async function createUser(fetch, userData) {
  const directus = getDirectusInstance(fetch);
  try {
    const newUser = await directus.request(
      createItem("tm_users", userData)
    );
    return {
      status: 201,
      data: newUser
    };
  } catch (error) {
    return {
      status: 500,
      error: "User creation failed",
      details: error.message
    };
  }
}
async function createPlaylistWithStories(fetch, { title, description, user_created }, storyIds) {
  const directus = getDirectusInstance(fetch);
  let image = null;
  if (storyIds.length > 0) {
    const firstStory = await directus.request(readItem("tm_story", storyIds[0]));
    if (firstStory && firstStory.image) {
      image = firstStory.image;
    }
  }
  const newPlaylist = await directus.request(
    createItem("tm_playlist", {
      title,
      description,
      user_created,
      stories: storyIds,
      image
    })
  );
  return {
    status: 201,
    data: newPlaylist
  };
}
async function fetchAnimals(fetch) {
  const directus = getDirectusInstance(fetch);
  try {
    const animals = await directus.request(readItems("tm_animal", {
      fields: ["id", "animal"]
    }));
    return animals;
  } catch (error) {
    console.error("Error fetching animals:", error);
    throw error;
  }
}
async function fetchSeasons(fetch) {
  try {
    const seasons = await fetchCollection(fetch, "tm_season");
    return { seasons };
  } catch (error) {
    console.error("Error fetching season data:", error);
    throw error;
  }
}
async function fetchAllData(fetch) {
  const [
    users,
    profiles,
    profileStatistics,
    buddys,
    languages,
    audios,
    playlists,
    speakers,
    stories,
    likes,
    playlistStories,
    profileUsers
  ] = await Promise.all([
    fetchCollection(fetch, "tm_users"),
    fetchCollection(fetch, "tm_profile"),
    fetchCollection(fetch, "tm_profile_statistics"),
    fetchCollection(fetch, "tm_buddy"),
    fetchCollection(fetch, "tm_language"),
    fetchCollection(fetch, "tm_audio"),
    fetchCollection(fetch, "tm_playlist"),
    fetchCollection(fetch, "tm_speaker_profile"),
    fetchCollection(fetch, "tm_story"),
    fetchCollection(fetch, "tm_likes"),
    fetchCollection(fetch, "tm_playlist_stories"),
    fetchCollection(fetch, "tm_profile_user")
  ]);
  return {
    users,
    profiles,
    profileStatistics,
    buddys,
    languages,
    audios,
    playlists,
    speakers,
    stories,
    likes,
    playlistStories,
    profileUsers
  };
}
function retrieveFromAssets(url) {
  return `${assetBaseUrl}${url}`;
}
function formatPlaytime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} min ${remainingSeconds} sec`;
}
function mapStoriesWithDetails(stories, audios, languages) {
  return stories.map((story) => {
    const language = languages.find((lang) => lang.id === story.language)?.language || "unknown.svg";
    const storyAudios = story.audio.map((audioId) => {
      const audioData = audios.find((audio) => audio.id === audioId);
      if (audioData) {
        const audioFile = retrieveFromAssets(audioData.audio_file);
        return {
          id: audioData.id,
          file: audioFile,
          voice_colours: audioData.voice_colours,
          speaker_profile: audioData.speaker_profile
        };
      }
      return null;
    }).filter(Boolean);
    if (story.image) {
      story.image = retrieveFromAssets(story.image);
    }
    if (story.playtime) {
      story.playtimeSeconds = story.playtime;
      story.playtime = formatPlaytime(story.playtime);
    }
    story.language = language;
    return {
      ...story,
      audios: storyAudios
    };
  });
}
function SeasonDetailInStories(stories, seasons) {
  return stories.map((story) => ({
    ...story,
    season: seasons.find((s) => s.id === story.season)?.season || null
  }));
}
function AnimalDetailInStories(stories, animals) {
  return stories.map((story) => {
    const animal = animals?.find((a) => a.id === story.animal)?.animal || null;
    return {
      ...story,
      animal
    };
  });
}
function mapPlaylistsWithDetails(playlists, stories) {
  return playlists.map((playlist) => {
    const playlistStoriesData = (playlist.stories || []).map((storyId) => stories.find((story) => story.id === storyId)).filter(Boolean);
    let imageUrl = playlist.image ? `${PUBLIC_APIURL}/assets/${playlist.image}` : void 0;
    return {
      ...playlist,
      image: imageUrl,
      stories: playlistStoriesData
    };
  });
}
function mapProfilesWithImages(profiles) {
  return profiles.map((profile) => {
    if (profile.avatar) {
      profile.avatar = retrieveFromAssets(profile.avatar);
    }
    return {
      ...profile
    };
  });
}
async function fetchApi(fetch, endpoint) {
  const directus = getDirectusInstance(fetch);
  try {
    const response = await directus.request(readItems(endpoint));
    return response;
  } catch (error) {
    console.error("Error in fetchApi:", error);
    throw error;
  }
}
async function deleteFromCollection(fetch, collectionName, id) {
  const directus = getDirectusInstance(fetch);
  try {
    return await directus.request(deleteItem(collectionName, id));
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
}
async function fetchAudioById(fetch, id) {
  const directus = getDirectusInstance(fetch);
  try {
    const audio = await directus.request(
      readItem("tm_audio", id, {
        fields: ["id", "audio_file", "transcript", "transcript_file", "voice_colours", "speaker_profile"]
      })
    );
    return {
      ...audio,
      audio_file: audio.audio_file ? `${assetBaseUrl}${audio.audio_file}` : null,
      transcript_file: audio.transcript_file ? `${assetBaseUrl}${audio.transcript_file}` : null
    };
  } catch (error) {
    console.error(`Error fetching audio with id ${id}:`, error);
    throw error;
  }
}
export {
  AnimalDetailInStories as A,
  SeasonDetailInStories as S,
  fetchAnimals as a,
  fetchSeasons as b,
  mapPlaylistsWithDetails as c,
  deleteFromCollection as d,
  fetchApi as e,
  fetchAllData as f,
  createPlaylistWithStories as g,
  fetchCollection as h,
  mapProfilesWithImages as i,
  createUser as j,
  fetchAudioById as k,
  mapStoriesWithDetails as m
};
