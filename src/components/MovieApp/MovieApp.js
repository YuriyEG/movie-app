/* eslint-disable */

import React, { useState } from 'react';

import ServiceApi from '../../modules/service';
import LoadingSpin from '../Spin/Spin';
import './MovieApp.css';

import SearchForm from '../SearchForm/SearchForm';
import Pagin from '../Pagin/Pagin';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';

const MovieApp = () => {
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});
  const service = new ServiceApi();
  async function getData(query, page) {
    setSpin(true);
    const result = await service.getPageMovies(query, page);
    setData(result);
    setSpin(false);
  }

  function getDataHandler(value) {
    getData(value, 2);
  }

  return (
    <div className="movie-app">
      <div className="main">
        <Filter />
        <SearchForm getDataHandler={getDataHandler} />
        {spin ? <LoadingSpin /> : <div></div>}

        {data.results ? <CardList list={data.results} /> : <h1>Данные пока не загружены</h1>}

        <Pagin />
      </div>
    </div>
  );
};

export default MovieApp;
