import React from 'react';

import Card from '../Card/Card';

import './CardList.css';

const CardList = ({ list }) => {
  return (
    <div className="cardlist">
      {list.map((film) => (
        <Card key={Math.random()} film={film} />
      ))}
    </div>
  );
};

export default CardList;
