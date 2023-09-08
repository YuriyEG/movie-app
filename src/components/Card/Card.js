/* eslint-disable */
import React from 'react';



import transformDate from '../../modules/transformDate';
import './Card.css';
import Stars from '../Stars/Stars';
import '../Stars/Stars.css';
import GuestSession from '../../modules/GuestSession';
import { isDate } from 'date-fns/esm';

const editText = (text, length, end) => {
  if (text.length < length) {
    return `${text}`;
  }
  let cur = text.slice(0, length, end);
  let i = length;
  while (text[i] !== ' ' && text[i]) {
    cur += text[i];
    i += 1;
  }

  return `${cur}${end}`;
};



const Card = ({ film, guestSessionId, genresList }) => {



  const overview = editText(film.overview, 140, '...');
  const title = editText(film.title, 20, '');
  const average = film.vote_average.toFixed(1);
  const date = transformDate(film.release_date);
  const rating = film.rating;

  let color;
  if (rating <= 3) {
    color = '#E90000'
  } else if (rating <=5 && rating > 3) {
    color = '#E97E00'
  } else if (rating <=7 && rating > 5) {
    color = '#E9D100'
  } else if (rating > 7) {
    color = '#66E900'
  }
  
  const imageUrl = film.poster_path;
  
  let posterImage = `https://image.tmdb.org/t/p/w500${imageUrl}`;

  

  const guestSession = new GuestSession();
  
  const RateCard = (rate) => {
    guestSession.postRateStars(guestSessionId, film.id , rate)
  }
  
  let ids = film.genre_ids;
  let genresTrain = [];
  for (let i=0; i<5; i++) {
    if  (ids[i]) {
      genresTrain.push(genresList[ids[i]]);
    }
  }

  console.log('genresTrain: ', genresTrain);

  
  return (
    <div className="card">
      <div className="card__picture">
        <img className='card__image' src={posterImage} alt=''></img>
      </div>
      <div className="card__info">
        <div className="card__header">
          <span className="card__title">{title} </span>
          <div className="card__rating" style={{ border: `3px solid ${color}`}}>{average}</div>
        </div>
        <span className="card__date">{date}</span>
        <div className="card__genres">
          { genresTrain.map( genre => <div className="card__genres-item">{genre}</div> )}
      
        </div>
        <div className="card__text">{overview}</div>

        <div className="card__component-wrapper">
          <Stars rating={rating} rateById={RateCard}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
