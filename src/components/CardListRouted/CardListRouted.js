import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import GuestSession from '../../modules/GuestSession';
import Pagin from '../Pagin/Pagin';
import './CardListRouted.css';

const guestapi = new GuestSession();

const CardListRouted = ({ curData, guestSessionId }) => {
  const [ratedData, setRatedData] = useState(curData);

  const showSession = (data) => {
    console.log('policheno: ', data);
    setRatedData(data);
  };
  useEffect(() => {
    guestapi.getSession(guestSessionId, 1, showSession);
  }, []);

  return (
    <div className="cardListRouted">
      {ratedData.results.map((film) => (
        <Card key={Math.random()} guestSessionId={guestSessionId} film={film} />
      ))}
      <Pagin />
    </div>
  );
};

export default CardListRouted;
