import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import getRated from '../../modules/getRatedMovies';
import GuestSession from '../../modules/quest-session';
import './CardListRouted.css';

const guestapi = new GuestSession();

const CardListRouted = ({ curData, guestSessionId }) => {
  const [ratedData, setRatedData] = useState(curData);

  async function loadRouted() {
    getRated(guestSessionId, (data) => {
      console.log(data, 'data is received', guestSessionId);
      setRatedData({ ...data });
    });
    // console.log(guestSessionId);
    // guestapi.getSession(guestSessionId, 1);
  }

  const showSession = (data) => {
    console.log('policheno: ', data);
    setRatedData(data);
  };
  useEffect(() => {
    // loadRouted();
    guestapi.getSession(guestSessionId, 1, showSession);
  }, []);

  return (
    <div className="cardListRouted">
      {ratedData.results.map((film) => (
        <Card key={Math.random()} guestSessionId={guestSessionId} film={film} onClick={() => console.log('works')} />
      ))}
    </div>
  );
};

export default CardListRouted;
