import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
    {
      src: 'https://cdn.pixabay.com/photo/2017/04/24/09/25/horse-2255876_960_720.jpg',
      altText: 'Man with a horse',
      key: 1,
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/04/24/09/28/couple-2255885_960_720.jpg',
      altText: 'Man and Woman',
      key: 2,
    },
    {
      src: 'https://cdn.pixabay.com/photo/2022/09/14/22/56/anime-7455351_960_720.jpg',
      altText: 'Forrest',
      key: 3,
    },
  ];

const Home = (args) => {

    const [activeIndex,setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false)

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex - 1;
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
        >
          <img src={item.src} alt={item.altText} style={{ width: '100%' }} />
        </CarouselItem>
      ));
      

    return(
        <>
            <h3>Welcome Home: Sanitarium</h3>
            <Carousel
                style={{ alignItems: 'center'}}
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
                    style={{ cursor:"pointer" }}
                    className="carousel-control-prev"
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    style={{ cursor:"pointer"}}
                    className="carousel-control-next"
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>

        </>
    )
}

export default Home