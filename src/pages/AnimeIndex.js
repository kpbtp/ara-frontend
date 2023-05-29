import { Input } from 'reactstrap';
import React, { useState, useEffect, useContext } from 'react';
import { TjTest } from './TjTest';
import MyAnimeList from './MyAnimeList';

const AnimeIndex = ({ fetchAnimeIndex, currentPage, setCurrentPage, loading, animeList, currentUser }) => {
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
    }
  }

  return (
    <div className="pt-4 pb-20 bg-gradient-to-b from-gray-950 via-gray-800 to-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Anime Index</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 m-3">
          {animeList.map((anime) => {
            const isChecked = selectedAnimeIds.includes(anime.mal_id);

            return (
              <div className="bg-gray-800 rounded-xl shadow-md shadow-blue-500 -top-2 -left-2" key={anime.mal_id}>
                <img className="w-full rounded-t-xl" src={anime.images.jpg.image_url} alt={anime.title} />
                <div className="p-4">
                  <h2 className="text-sm font-bold mb-2">{anime.title}</h2>
                  <span className="text-xs text-gray-500 mb-4">{anime.synopsis.slice(0, 150)+'...'}</span>
                  <p className="text-xs text-gray-500">Duration: {anime.duration}</p>
                  {currentUser && (
                    <React.Fragment key={anime.mal_id}>
                      <Input
                        type="checkbox"
                        name="animeSelection"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(anime.mal_id)}
                        className="mr-2"
                      />{' '}
                      Add to My Anime List
                    </React.Fragment>
                  )}
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
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default AnimeIndex;
