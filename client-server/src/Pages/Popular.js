import React from 'react';
import Slider from '../components/Carousels/NetflixSlider';
import movies from '../components/Carousels/data/movie';

const Popular = () => {
  return (
    <>
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </Slider>
    </>
  );
};

export default Popular;
