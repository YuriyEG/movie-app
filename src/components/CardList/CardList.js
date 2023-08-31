import React from 'react';

import Card from '../Card/Card';
import LoadingSpin from '../Spin/Spin.js';

import './CardList.css';

const films = [1, 3, 4, 5, 6, 6, 3, 3, 2, 7, 9];
const CardList = () => {
  return (
    <div className="cardlist">
      <LoadingSpin />
      {films.map((node) => (
        <Card key={Math.random() + node} />
      ))}
    </div>
  );
};

export default CardList;
