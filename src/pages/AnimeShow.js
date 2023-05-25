import React, { useState, useContext } from "react";
const AnimeShow = ({ current_user, id }) => {
  console.log("Anime for anime show: ", id);
  const [singleAnime, setSingleAnime] = useState(null);

  const showAnime = () => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((payload) => {
        setSingleAnime([payload.data]);
      })
      .catch((error) => console.log("Anime show errors", error));
  };

  return (
    <>
      <div>
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {singleAnime.map((anime) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimeShow;
