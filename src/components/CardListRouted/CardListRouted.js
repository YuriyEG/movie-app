import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';
import GuestSession from '../../modules/GuestSession';
import RatedPagin from '../RatedPagin/RatedPagin';
import './CardListRouted.css';

const guestSession = new GuestSession();

const CardListRouted = ({ curData, guestSessionId, genresObj }) => {
  const [ratedData, setRatedData] = useState(curData);

  const showSession = (data) => {
    setRatedData(data);
  };
  useEffect(() => {
    guestSession.getSession(guestSessionId, 1, showSession);
  }, []);

  const getRatedByPagination = (ratedPage) => {
    guestSession.getSession(guestSessionId, ratedPage, showSession);
  };
  return (
    <div>
      <div className="cardListRouted">
        {ratedData.results.map((film) => (
          <Card key={Math.random()} genresObj={genresObj} rated={true} guestSessionId={guestSessionId} film={film} />
        ))}
      </div>
      <RatedPagin page={ratedData.page} totalPages={ratedData.total_pages} getDataDebounced={getRatedByPagination} />
    </div>
  );
};

CardListRouted.defaultProps = {
  curData: { page: 1, results: [], total_pages: 1, total_results: 0 },
};

export default CardListRouted;
