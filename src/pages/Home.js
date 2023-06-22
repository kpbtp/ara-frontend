import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const Home = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [carouselImage, setCarouselImage] = useState(null);

  useEffect(() => {
    fetchCarouselImage();
  }, []);

  const randomPage = (num) => {
    return Math.floor(Math.random()*num)
  }

  const fetchCarouselImage = () => {
    fetch(`https://api.jikan.moe/v4/anime?page=${randomPage(375)}&limit=4`)
      .then((response) => response.json())
      .then((data) => {
        setCarouselImage(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const items = [
    {
      src: carouselImage ? carouselImage[1].images.jpg.image_url : '',
      altText: 'Man with a horse',
      key: 1,
      title: carouselImage ? carouselImage[1].title : '', 
      genres: carouselImage ? carouselImage[1].genres : '',
      year: carouselImage ? carouselImage[1].year : '',
      synopsis: carouselImage ? carouselImage[1].synopsis : '',
    },
    {
      src: carouselImage ? carouselImage[2].images.jpg.image_url : '',
      altText: 'Man with a horse',
      key: 2,
      title: carouselImage ? carouselImage[2].title : '',
      genres: carouselImage ? carouselImage[2].genres : '',
      year: carouselImage ? carouselImage[2].year : '',
      synopsis: carouselImage ? carouselImage[2].synopsis : '',
    },
    {
      src: carouselImage ? carouselImage[3].images.jpg.image_url : '',
      altText: 'Man with a horse',
      key: 3,
      title: carouselImage ? carouselImage[3].title : '',
      genres: carouselImage ? carouselImage[3].genres : '',
      year: carouselImage ? carouselImage[3].year : '',
      synopsis: carouselImage ? carouselImage[3].synopsis : '',
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      key={item.key}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      className='px-3 pb-10 bg-gradient-to-r from-black to-gray-900 rounded-xl'
    >
     <div className="m-4 rounded-lg flex justify-content-center">
        <img src={item.src} alt={item.altText} className="rounded-xl" />
      </div>
      <div className="p-3 rounded-lg shadow-xl shadow-black columns-1 bg-gradient-to-l from-slate-900 via-slate-800 to-slate-900 ">
        <h3 className=" px-10 m-1 text-rose-500 font-medium text-center">
          {item.title}
        </h3>
        
        <p className="text-gray-300  px-10 m-1 text-sm text-center">{item.year}</p>
        <p className="text-gray-300  px-10 m-1 text-sm text-center">{item.synopsis}</p>
      </div>
    </CarouselItem>
  ));

  return (
    <>
      <div className=' bg-gradient-to-br p-1  from-gray-950 via-gray-800 to-gray-800 text-white'>
      <section className='min-h-auto m-5 px-10 '>
          <h2 className='text-5xl py-2 m-1 text-rose-500 font-medium text-center'>
            Welcome to Ara
          </h2>
          <p className='text-md px-10 py-2 mx-20 my-4 rounded-lg leading-8 text-center bg-slate-500/75 '>
            Stay up-to-date with the latest additions to our library. From
            brand-new seasons of your <span className='text-rose-500'>favorite shows</span> to highly anticipated
            anime adaptations, our new releases section showcases the freshest
            content that will keep you on the edge of your seat. Get a sneak
            peek into exciting stories and follow your beloved characters' new
            adventures.
          </p>
        </section>
        <section className='min-h-auto'>
          <div className='px-10 pb-10'>
            <Carousel
              style={{ alignItems: 'center' }}
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              {...args}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                style={{ cursor: 'pointer' }}
                className='carousel-control-prev'
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
              />
              <CarouselControl
                style={{ cursor: 'pointer' }}
                className='carousel-control-next'
                direction='next'
                directionText='Next'
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </section>
        
        
      </div>
    </>
  );
};

export default Home;
