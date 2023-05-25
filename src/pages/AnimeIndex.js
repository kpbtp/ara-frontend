import { Input } from 'reactstrap';
import React, { useState, useEffect, useContext } from 'react';
import { TjTest } from './TjTest';
import MyAnimeList from './MyAnimeList';

const AnimeIndex = ({ fetchAnimeIndex, currentPage, setCurrentPage, loading, animeList}) => {
  const { selectedAnimeIds, setSelectedAnimeIds } = useContext(TjTest);


  useEffect(() => {
    fetchAnimeIndex();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

const handleCheckboxChange = (id) => {
  if (selectedAnimeIds.includes(id)) {
    setSelectedAnimeIds(selectedAnimeIds.filter((animeId) => animeId !== id));
  } else {
    setSelectedAnimeIds([...selectedAnimeIds, id]);
  } console.log(selectedAnimeIds,);
};

return (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Anime Index</h1>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animeList.map(anime => {
          const isChecked = selectedAnimeIds.includes(anime.mal_id);

          return (
            <div className="bg-white rounded shadow-md" key={anime.mal_id}>
              <img className="w-full h-48 object-cover" src={anime.images.jpg.image_url} alt={anime.title} />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
                <span className="text-gray-600 mb-4">{anime.synopsis.slice(0, 150)}</span>
                <p className="text-gray-700">Duration: {anime.duration}</p>
                <Input
                  type="checkbox"
                  name="animeSelection"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(anime.mal_id)}
                  className="mr-2"
                /> Add to My Anime List
              </div>
            </div>
          );
        })}
      </div>
    )}
    <div className="mt-4 flex justify-between">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </div>
  </div>
);
};

export default AnimeIndex;