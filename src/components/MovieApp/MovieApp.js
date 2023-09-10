import React, { useState, useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';

import GuestSession from '../../modules/GuestSession';
import Service from '../../modules/service';
import GenresAPI from '../../modules/GenresAPI';
import LoadingSpin from '../LoadingSpin';
import SearchForm from '../SearchForm';
import CardList from '../CardList';
import CardListRated from '../CardListRated';
import RouterTabs from '../RouterTabs';
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
  const [ratedData, setRatedData] = useState({ page: 1, results: [], total_pages: 1, total_results: 0 });

  const service = new Service();
  const guestSession = new GuestSession();
  const genresApi = new GenresAPI();

  const dataReceiver = (receivedData) => {
    if (receivedData === 'no_guest_id') {
      console.log('не получен идентификатор');
    }
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

  const showSession = (receivedRatedData) => {
    if (receivedRatedData === 'no_rated_films') {
      console.log('ошибка при загрузке оцененных фильмов');
    }
    setRatedData(receivedRatedData);
  };

  useEffect(() => {
    if (!mode) {
      guestSession.getSession(guestId, 1, showSession);
    }
  }, [mode]);

  const getRatedByPagination = (ratedPage) => {
    guestSession.getSession(guestId, ratedPage, showSession);
  };

  const rateCard = (receivedRate, filmId) => {
    guestSession.postRateStars(guestId, filmId, receivedRate, (rateData) => console.log('Ошибка при отправке оценки'));
  };

  return (
    <div className="movie-app">
      <div className="main">
        <RouterTabs mode={mode} setMode={setMode} />
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

        {data.results && mode ? (
          <CardList
            data={data}
            getDataHandler={getDataHandler}
            genresObj={genresObj}
            guestSessionId={guestId}
            list={data.results}
            rateCard={rateCard}
          />
        ) : null}
        {!mode ? (
          <CardListRated
            ratedData={ratedData}
            getRatedByPagination={getRatedByPagination}
            genresObj={genresObj}
            guestSessionId={guestId}
            rateCard={rateCard}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MovieApp;
