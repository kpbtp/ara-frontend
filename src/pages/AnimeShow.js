import React, { useState, useEffect } from "react";

const AnimeShow = ({ current_user, id }) => {
  const [singleAnime, setSingleAnime] = useState(null);

  useEffect(() => {
    showAnime();
  }, []);

  const showAnime = () => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((payload) => {
        setSingleAnime(payload.data);
      })
      .catch((error) => console.log("Anime show errors", error));
  };

  if (!singleAnime) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md relative" key={singleAnime.mal_id}>
            <img
              className="w-full h-48 object-cover"
              src={singleAnime.images.jpg.image_url}
              alt={singleAnime.title}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{singleAnime.title}</h2>
              <h6>{singleAnime.genres[0].name}</h6>
              <span className="text-gray-600 mb-4">
                {singleAnime.synopsis.slice(0, 150) + " . . ."}
              </span>
              <p className="text-gray-700 mb-5">Duration: {singleAnime.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeShow;
