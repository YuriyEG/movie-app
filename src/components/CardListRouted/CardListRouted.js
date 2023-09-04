import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import getRated from '../../modules/getRatedMovies';
import './CardListRouted.css';

const CardListRouted = ({ curData, guestSessionId }) => {
  const [ratedData, setRatedData] = useState(curData);

  async function loadRouted() {
    getRated(guestSessionId, (data) => {
      console.log(data, 'data is received', guestSessionId);
      setRatedData({ ...data });
    });
  }

  useEffect(() => {
    loadRouted();
  }, []);

  return (
    <div className="cardListRouted" onClick={() => console.log(ratedData.results)}>
      {ratedData.results.map((film) => (
        <Card key={Math.random()} film={film} />
      ))}
    </div>
  );
};

export default CardListRouted;
