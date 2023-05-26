import React, { useState, useEffect } from "react";

const AnimeShow = ({ currentUser, id }) => {
  const [singleAnime, setSingleAnime] = useState(null);
  const [parallaxStyle, setParallaxStyle] = useState({});
  const transitionDuration = 0.5; // Adjust this value to change the transition duration in seconds

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

  const handleMouseMove = (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const offsetX = window.innerWidth / 2 - xPos;
    const offsetY = window.innerHeight / 2 - yPos;
    const parallaxAmount = 0.01; // Adjust this value to change the parallax effect
    const rotationAmount = -0.005; // Adjust this value to change the rotation amount

    setParallaxStyle({
      transition: `transform ${transitionDuration}s, box-shadow ${transitionDuration}s`,
      transform: `perspective(1000px) translate(${
        offsetX * parallaxAmount
      }px, ${offsetY * parallaxAmount}px) rotateX(${
        offsetY * rotationAmount
      }deg) rotateY(${offsetX * rotationAmount}deg)`,
      boxShadow: `${offsetX * 0.1}px ${
        offsetY * 0.1
      }px 10px rgba(0, 0, 0, 0.3)`,
    });
  };

  const resetParallax = () => {
    setParallaxStyle({
      transition: `transform ${transitionDuration}s, box-shadow ${transitionDuration}s`,
      transform: "none",
      boxShadow: "none",
    });

    // Reset the parallax style after the transition completes
    setTimeout(() => {
      setParallaxStyle({});
    }, transitionDuration * 10000);
  };

  if (!singleAnime) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-100 bg-blue-700">
        <div
          className="w-full py-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetParallax}
        >
          <div className="m-5">
            <div
            //this is start of card py to change its size
              className="bg-gradient-to-r from-black to-gray-800 drop-shadow-2xl relative rounded-xl flex"
              key={singleAnime.mal_id}
              style={parallaxStyle}
            >
              <img
                className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                src={singleAnime.images.jpg.large_image_url}
                alt={singleAnime.title}
              />
              <div className="p-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-tr-xl rounded-br-xl">
                <h2 className="text-lg font-bold mb-2">{singleAnime.title}</h2>
                <h6>{singleAnime.genres[0].name}</h6>
                <span className="text-gray-300 mb-4">
                  {singleAnime.synopsis}
                </span>
                <p className="text-gray-400 mt-3 mb-1">
                  {singleAnime.episodes} Episodes
                </p>
                <p className="text-gray-400 m-0 mb-1">
                  Year: {singleAnime.year} - {singleAnime.status}
                </p>
                <p className="text-gray-400 m-0 mb-1">
                  Score: {singleAnime.score}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeShow;
