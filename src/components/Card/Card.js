import React from 'react';

import './Card.css';
import Stars from '../Stars/Stars';
import '../Stars/Stars.css';

const date = 'March 5, 2020';
const rating = '6.6';

const source =
  'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...';

const editText = (text) => {
  if (text.length < 200) {
    return `${text}...`;
  }
  let cur = text.slice(0, 200);
  let i = 200;
  while (text[i] !== ' ' && text[i]) {
    cur += text[i];
    i += 1;
  }

  return `${cur}...`;
};

const result = editText(source);

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
        <div className="card__text">{result}</div>

        <div className="card__component-wrapper">
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default Card;