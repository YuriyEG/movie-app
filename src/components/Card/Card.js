/* eslint-disable */
import React from 'react';



import transformDate from '../../modules/transformDate';
import './Card.css';
import Stars from '../Stars/Stars';
import '../Stars/Stars.css';
import rateMovie from '../../modules/rateMovie';
import GuestSession from '../../modules/quest-session';

const date = 'March 5, 2020';
const rating = '6.6';

const source =
  'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...';

const editText = (text, length, end) => {
  if (text.length < length) {
    return `${text}...`;
  }
  let cur = text.slice(0, length, end);
  let i = length;
  while (text[i] !== ' ' && text[i]) {
    cur += text[i];
    i += 1;
  }

  return `${cur}${end}`;
};



const Card = ({ film, guestSessionId, onClick }) => {
  const overview = editText(film.overview, 150, '...');
  const title = editText(film.title, 20, '');
  const rating = film.vote_average.toFixed(1);
  const date = transformDate(film.release_date);
  const poster = film.poster_path;


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

  const  rateById = (rate) => {
    console.log(rate);
    console.log(film.id);
    console.log(guestSessionId);
    rateMovie(guestSessionId, film.id, rate);
  }

  const guesssss = new GuestSession();
  
  const RateCard = (rate) => {
    console.log('rate');
    guesssss.postRateStars(guestSessionId, film.id , rate)
  }

  
  return (
    <div className="card">
      <div className="card__picture">
        <img className='card__image' src={posterImage} alt=''></img>
      </div>
      <div className="card__info">
        <div className="card__header">
          <span className="card__title">{title} </span>
          <div className="card__rating" style={{ border: `3px solid ${color}`}}>{rating}</div>
        </div>
        <span className="card__date">{date}</span>
        <div className="card__genres">
          <div className="card__genres-item">Action Film</div>
          <div className="card__genres-item">Drama</div>
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
