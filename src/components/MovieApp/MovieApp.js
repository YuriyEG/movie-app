import React, { useState } from 'react';

import ServiceApi from '../../modules/service';
import './MovieApp.css';

import SearchForm from '../SearchForm/SearchForm';
import Pagin from '../Pagin/Pagin';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';

const MovieApp = () => {
  const [data, setData] = useState({});
  const service = new ServiceApi();
  async function getData(query, page) {
    const result = await service.getPageMovies(query, page);
    setData(result);
    console.log(data);
  }

  function getDataHandler(value) {
    getData(value, 2);
  }

  return (
    <div className="movie-app">
      <div className="main">
        <Filter />
        <SearchForm getDataHandler={getDataHandler} />
        <CardList />
        <Pagin />
      </div>
    </div>
  );
};

export default MovieApp;
