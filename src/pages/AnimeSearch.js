import React, { useState } from "react";

const AnimeSearch = ({ currentUser }) => {
  const [animeTitle, setAnimeTitle] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const searchAnime = async () => {
    if (animeTitle.trim() === "") {
      console.log("Please enter an anime title");
      return;
    }

    const baseUrl = "https://api.jikan.moe/v4/anime";
    const encodedTitle = encodeURIComponent(animeTitle);
    const url = `${baseUrl}?q=${encodedTitle}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Update search results state
      setSearchResults(data);

      // Clear the input field
      setAnimeTitle("");
    } catch (error) {
      console.error("Error searching for anime:", error);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={animeTitle}
          onChange={(e) => setAnimeTitle(e.target.value)}
          placeholder="Enter anime title"
        />
        <button onClick={searchAnime}>Search</button>

        {searchResults && (
          <div className="grid grid-cols-3 gap-4 m-4">
            {searchResults.data.map((anime) => (
              <div
                className="bg-gray-800 rounded-xl shadow-md shadow-blue-500"
                key={anime.mal_id}
              >
                <img
                  className="w-full rounded-t-xl"
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <div className="p-2">
                  <h2 className="text-sm font-bold mb-2">{anime.title}</h2>
                  <span className="text-xs text-gray-500 mb-4">
                    {anime.synopsis}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Duration: {anime.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AnimeSearch;
