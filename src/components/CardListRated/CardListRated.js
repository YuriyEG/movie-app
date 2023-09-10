import React from 'react';

import Card from '../Card';
import RatedPagin from '../RatedPagin';

const CardListRated = ({ ratedData, getRatedByPagination, genresObj, rateCard }) => {
  return (
    <div>
      <div className="cardListRouted">
        {ratedData.results.map((film) => (
          <Card key={Math.random()} genresObj={genresObj} rateCard={rateCard} film={film} />
        ))}
      </div>
      <RatedPagin page={ratedData.page} totalPages={ratedData.total_pages} getDataDebounced={getRatedByPagination} />
    </div>
  );
};

export default CardListRated;
