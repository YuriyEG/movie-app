import React from 'react';

import editDescription from '../../modules/editDescription';
import transformDate from '../../modules/transformDate';
import Stars from '../Stars';
import '../Stars/Stars.css';
import getColor from '../../modules/getColor';

const Card = ({ film, genresObj, rateCard }) => {
  const overview = editDescription(film.overview, 140, '...');
  const title = editDescription(film.title, 20, '');
  const average = film.vote_average.toFixed(1);
  const date = transformDate(film.release_date);
  const { rating } = film;
  const color = getColor(film.vote_average);

  const imageUrl = film.poster_path;
  let posterImage;
  if (imageUrl === null) {
    posterImage = './picture.jpg';
  } else {
    posterImage = `https://image.tmdb.org/t/p/w500${imageUrl}`;
  }

  const RateFilm = (rate) => {
    rateCard(rate, film.id);
  };

  const ids = film.genre_ids;
  const genresTrain = [];
  for (let i = 0; i < 5; i += 1) {
    if (ids[i]) {
      genresTrain.push(genresObj[ids[i]]);
    }
  }

  return (
    <div className="card">
      <div className="card__picture">
        <img className="card__image" src={posterImage} alt=""></img>
      </div>
      <div className="card__info">
        <div className="card__header">
          <span className="card__title">{title} </span>
          <div className="card__rating" style={{ border: `3px solid ${color}` }}>
            {average}
          </div>
        </div>
        <span className="card__date">{date}</span>
        <div className="card__genres">
          {genresTrain.map((genre) => (
            <div key={Math.random()} className="card__genres-item">
              {genre}
            </div>
          ))}
        </div>
        <div className="card__text">{overview}</div>

        <div className="card__component-wrapper">
          <Stars rating={rating} rateById={RateFilm} />
        </div>
      </div>
    </div>
  );
};

export default Card;
