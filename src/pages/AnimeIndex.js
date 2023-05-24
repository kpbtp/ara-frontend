import React, { useState, useEffect } from 'react';

const AnimeIndex = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAnimeList = () => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}&limit=21`)
      .then(response => response.json())
      .then(data => {
        setAnimeList(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };


  useEffect(() => {
    fetchAnimeList();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Anime Index</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animeList.map(anime => (
            <div className="bg-white rounded shadow-md" key={anime.id}>
              <img className="w-full h-48 object-cover" src={anime.images.jpg.image_url} alt={anime.title} />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{anime.title}</h2>
                <p className="text-gray-600 mb-4">{anime.synopsis.slice(0,150)}</p>
                <p className="text-gray-700">Duration: {anime.duration}</p>
              </div>
            </div>
          ))}
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
