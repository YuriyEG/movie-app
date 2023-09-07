import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import GuestSession from '../../modules/GuestSession';
import RatedPagin from '../RatedPagin/RatedPagin';
import './CardListRouted.css';

const guestSession = new GuestSession();

const CardListRouted = ({ curData, guestSessionId }) => {
  const [ratedData, setRatedData] = useState(curData);

  const showSession = (data) => {
    setRatedData(data);
  };
  useEffect(() => {
    guestSession.getSession(guestSessionId, 1, showSession);
  }, []);

  const getRatedByPagination = (ratedPage) => {
    console.log(ratedPage, guestSessionId);
    guestSession.getSession(guestSessionId, ratedPage, showSession);
    console.log(ratedPage, 'page');
  };
  return (
    <div>
      <div className="cardListRouted">
        {ratedData.results.map((film) => (
          <Card key={Math.random()} guestSessionId={guestSessionId} film={film} />
        ))}
      </div>
      <RatedPagin page={ratedData.page} totalPages={ratedData.total_pages} getDataDebounced={getRatedByPagination} />
      {ratedData.total_pages}
    </div>
  );
};

export default CardListRouted;
