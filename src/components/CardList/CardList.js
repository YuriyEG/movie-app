import React from 'react';

import Card from '../Card/Card';

import './CardList.css';

const CardList = ({ list, guestSessionId, genresList }) => {
  return (
    <div className="cardlist">
      {list.map((film) => (
        <Card key={Math.random()} genresList={genresList} guestSessionId={guestSessionId} film={film} />
      ))}
    </div>
  );
};

export default CardList;
