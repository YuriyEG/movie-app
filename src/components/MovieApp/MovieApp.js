import React, { useState, useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';

import GuestSession from '../../modules/GuestSession';
import Service from '../../modules/service';
import GenresAPI from '../../modules/GenresAPI';
import LoadingSpin from '../LoadingSpin';
import SearchForm from '../SearchForm';
import Pagin from '../Pagin';
import CardList from '../CardList';
import CardListRouted from '../CardListRouted';
import Filter from '../Filter';
import AlertBox from '../Alert';

const MovieApp = () => {
  const [isNotFound, setIsNotFound] = useState(false);

  const [noResults, setNoResults] = useState(false);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});

  const [savedValue, setSavedValue] = useState('');
  const [mode, setMode] = useState(true);
  const [guestId, setGuestId] = useState('');
  const [genresObj, setGenresObj] = useState({});
  const [timerId, setTimerId] = useState(null);
  const service = new Service();
  const guestSession = new GuestSession();
  const genresApi = new GenresAPI();
  const dataReceiver = (receivedData) => {
    setGuestId(receivedData.guest_session_id);
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
    genresApi.getGenres(loadGenres);
  }, []);

  async function getData(receivedQuery, page) {
    let requestQuery;
    if (receivedQuery === undefined) {
      requestQuery = savedValue;
    } else {
      requestQuery = receivedQuery;
    }
    setNoResults(false);
    setIsNotFound(false);
    setSpin(true);
    const result = await service.getPageMovies(requestQuery, page, () => setIsNotFound(true));

    setData(result);

    setSpin(false);

    if (result !== 'not found' && result !== 'disconnected') {
      if (result.results.length === 0) {
        setNoResults(true);
      }
      if (receivedQuery === '') {
        setNoResults(false);
      }
    }
  }

  function getDataHandler(value, page = 1) {
    if (timerId === null) {
      const cur = setTimeout(() => {
        getData(value, page);
        setTimerId(null);
      }, 1000);
      setTimerId(cur);
    } else {
      clearTimeout(timerId);
      const cur = setTimeout(() => {
        getData(value, page);
        setTimerId(null);
      }, 700);
      setTimerId(cur);
    }
  }

  return (
    <div className="movie-app">
      <div className="main">
        <Filter message={'Отсутствует сеть'} mode={mode} setMode={setMode} />
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
