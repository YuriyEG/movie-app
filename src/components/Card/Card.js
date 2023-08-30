import React from 'react';

import './Card.css';
import Stars from '../Stars/Stars';

const date = 'March 5, 2020';
const rating = '6.6';
const Card = () => {
  return (
    <div className="card">
      <div className="card__picture"></div>
      <div className="card__info">
        <div className="card__header">
          <span className="card__title">The way back</span>
          <div className="card__rating">{rating}</div>
        </div>
        <span className="card__date">{date}</span>
        <div className="card__genres">
          <div className="card__genres-item">Action Film</div>
          <div className="card__genres-item">Drama</div>
        </div>
        <div className="card__text">
          A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
          attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high. A former
          basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to
          regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...
        </div>
        <Stars />
      </div>
    </div>
  );
};

export default Card;
