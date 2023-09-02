import React from 'react';

import Card from '../Card/Card';
import './CardListRouted.css';

const CardListRouted = ({ list }) => {
  return (
    <div className="cardListRouted">
      {list.map((film) => (
        <Card key={Math.random()} film={film} />
      ))}
    </div>
  );
};

export default CardListRouted;
