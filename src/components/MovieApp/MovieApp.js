import React, { useState, useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';
import useToken from 'antd/es/theme/useToken';
import { Card, notification } from 'antd';
import { da } from 'date-fns/locale';

import GuestSession from '../../modules/GuestSession';
import Service from '../../modules/service';
import GenresAPI from '../../modules/GenresAPI';
import LoadingSpin from '../Spin/Spin';
import './MovieApp.css';
import SearchForm from '../SearchForm/SearchForm';
import Pagin from '../Pagin/Pagin';
import CardList from '../CardList/CardList';
import CardListRouted from '../CardListRouted/CardListRouted';
import Filter from '../Filter/Filter';
import AlertBox from '../Alert/AlertBox';

const MovieApp = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});
  const [isBlock, setIsBlock] = useState(false);
  const [savedValue, setSavedValue] = useState('');
  const [mode, setMode] = useState(true);
  const [guestId, setGuestId] = useState('');
  const [genresObj, setGenresObj] = useState({});
  const service = new Service();
  const guestSession = new GuestSession();
  const genres_api = new GenresAPI();
  const dataReceiver = (data) => {
    setGuestId(data.guest_session_id);
  };

  const loadGenres = (genres) => {
    const gl = genres.genres;
    const curObj = {};
    gl.forEach((element) => {
      curObj[element.id] = element.name;
    });
    setGenresObj(curObj);
  };

  useEffect(() => {
    guestSession.guestSeId(dataReceiver);
    genres_api.getGenres(loadGenres);
  }, []);

  async function getData(query, page) {
    if (query === undefined) {
      query = savedValue;
    }
    setNoResults(false);
    setIsNotFound(false);
    setSpin(true);
    const result = await service.getPageMovies(query, page, () => setIsNotFound(true));

    setData(result);

    setSpin(false);

    if (result !== 'not found' && result !== 'disconnected') {
      if (result.results.length === 0) {
        setNoResults(true);
      }
      if (query === '') {
        setNoResults(false);
      }
    }
  }

  function getDataHandler(value, page = 1) {
    if (!isBlock) {
      setIsBlock(true);
      setTimeout(() => {
        getData(value, page);
        setIsBlock(false);
      }, 800);
    }
  }

  return (
    <div className="movie-app">
      <div className="main">
        <Filter message={alertMessage} mode={mode} setMode={setMode} />
        {mode ? <SearchForm getDataHandler={getDataHandler} setSavedValue={setSavedValue} /> : null}

        <Offline>
          <div className="alertWrapper">
            <AlertBox message={'Отсутствует сеть'} type={'error'} />
          </div>
        </Offline>
        {isNotFound ? (
          <Online>
            <div className="alertWrapper">
              <AlertBox message="Запрашиваемые данные не найдены. Ошибка 404" type="error" />
            </div>
          </Online>
        ) : null}
        {noResults && mode ? (
          <div className="alertWrapper">
            <AlertBox message="Поиск не дал результатов" type="error" />
          </div>
        ) : null}

        {spin ? <LoadingSpin /> : <div></div>}

        {data.results && mode ? <CardList genresObj={genresObj} guestSessionId={guestId} list={data.results} /> : null}
        {!mode ? <CardListRouted genresObj={genresObj} guestSessionId={guestId} /> : null}

        {mode ? <Pagin getDataDebounced={getDataHandler} page={data.page} totalPages={data.total_pages} /> : null}
      </div>
    </div>
  );
};

export default MovieApp;
