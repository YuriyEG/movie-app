import React from 'react';

import Card from '../Card/Card';

const CardListRouted = ({ list }) => {
  return (
    <div className="cardlistRouted">
      {list.map((film) => (
        <Card key={Math.random()} film={film} />
      ))}
    </div>
  );
};

export default CardListRouted;
