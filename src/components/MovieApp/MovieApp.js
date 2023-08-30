import React from 'react';

import './MovieApp.css';

import SearchForm from '../SearchForm/SearchForm';
import Pagin from '../Pagin/Pagin';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';

const MovieApp = () => {
  return (
    <div className="movie-app">
      <div className="main">
        <Filter />
        <SearchForm />
        <CardList />
        <Pagin />
      </div>
    </div>
  );
};

export default MovieApp;
