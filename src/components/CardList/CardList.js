import React from 'react';

import Pagin from '../Pagin';
import Card from '../Card';

const CardList = ({ list, guestSessionId, getDataHandler, data, genresObj }) => {
  return (
    <div>
      <div className="cardlist">
        {list.map((film) => (
          <Card key={Math.random()} genresObj={genresObj} guestSessionId={guestSessionId} film={film} />
        ))}
      </div>
      <Pagin getDataDebounced={getDataHandler} page={data.page} totalPages={data.total_pages} />
    </div>
  );
};

export default CardList;
