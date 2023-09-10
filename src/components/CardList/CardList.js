import React from 'react';

import Pagin from '../Pagin';
import Card from '../Card';

const CardList = ({ list, guestSessionId, getDataHandler, rateCard, data, genresObj }) => {
  return (
    <div>
      <div className="cardlist">
        {list.map((film) => (
          <Card
            key={Math.random()}
            genresObj={genresObj}
            guestSessionId={guestSessionId}
            rateCard={rateCard}
            film={film}
          />
        ))}
      </div>
      <Pagin getDataDebounced={getDataHandler} page={data.page} totalPages={data.total_pages} />
    </div>
  );
};

export default CardList;
