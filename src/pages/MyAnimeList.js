import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TjTest } from "./TjTest";

const MyAnimeList = ({ animeList, updateId, id }) => {
  const { selectedAnimeIds } = useContext(TjTest);
  const [genreFilter, setGenreFilter] = useState("");

  if (!Array.isArray(selectedAnimeIds)) {
    return <div>No anime selected</div>;
  }

  const filteredAnime = animeList.filter(({ mal_id, genres }) => {
    if (
      genreFilter &&
      !genres.name.toLowerCase().includes(genreFilter.toLowerCase())
    ) {
      return false;
    }
    return selectedAnimeIds.includes(mal_id);
  });

  const handleClick = (number) => {
    updateId(number);
  };
  console.log(handleClick)

  return (
    <>
      <input
        type="text"
        placeholder="Filter by genre"
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
        className="pb-20"
      />
      <div>
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAnime.map((anime) => (
            <div className="bg-white shadow-md relative" key={anime.mal_id}>
              <img
                className="w-full h-48 object-cover"
                src={anime.images.jpg.image_url}
                alt={anime.title}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
                <h6>{anime.genres[0].name}</h6>
                <span className="text-gray-600 mb-4">
                  {anime.synopsis.slice(0, 150) + " . . ."}
                </span>
                <p className="text-gray-700 mb-5">Duration: {anime.duration}</p>
                <p className="text-gray-700 mb-5">ID: {anime.mal_id}</p>
                <Link to={`/animeshow/${anime.mal_id}`}>
                  <button
                    onClick={() => handleClick(anime.mal_id)} // Pass the handleClick as a reference
                    className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Go to Anime Show
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAnimeList;
