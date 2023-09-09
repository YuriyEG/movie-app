import React from 'react';

import Card from '../Card/Card';

import './CardList.css';

const CardList = ({ list, guestSessionId, genresObj }) => {
  return (
    <div className="cardlist">
      {list.map((film) => (
        <Card key={Math.random()} genresObj={genresObj} guestSessionId={guestSessionId} film={film} />
      ))}
    </div>
  );
};

export default CardList;
