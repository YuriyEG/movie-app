import React from 'react';

import Card from '../Card/Card';

import './CardList.css';

const CardList = ({ list, rateMovie, guestSessionId }) => {
  return (
    <div className="cardlist">
      {list.map((film) => (
        <Card key={Math.random()} rateMovie={rateMovie} guestSessionId={guestSessionId} film={film} />
      ))}
    </div>
  );
};

export default CardList;
