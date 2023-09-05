/* eslint-disable */

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Online, Offline } from 'react-detect-offline';
import GuestSession from '../../modules/GuestSession';


import Service from '../../modules/service';
import LoadingSpin from '../Spin/Spin';
import './MovieApp.css';

import SearchForm from '../SearchForm/SearchForm';
import Pagin from '../Pagin/Pagin';
import CardList from '../CardList/CardList';
import CardListRouted from '../CardListRouted/CardListRouted';
import Filter from '../Filter/Filter';
import AlertBox from '../Alert/AlertBox';
import useToken from 'antd/es/theme/useToken';
import { Card, notification } from 'antd';


import { da } from 'date-fns/locale';

const MovieApp = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});
  const [isBlock, setIsBlock] = useState(false);
  
  const [savedValue, setSavedValue] = useState('');

  const [mode, setMode] = useState(true);

  const [guestId, setGuestId] = useState('');



  const service = new Service();

  const guestSession = new GuestSession();

  const  dataReceiver = (data) => {
    setGuestId(data.guest_session_id);
  }

  useEffect(() => {
    guestSession.guestSeId(dataReceiver);
  }, [])

  
  
  async function getData(query, page) {

    if (query === undefined) {
      query = savedValue;
    }
    console.log(`query is ${query} and page is ${page}`);
    
    setNoResults(false);
    setIsNotFound(false);
    setSpin(true);
    const result = await service.getPageMovies(query, page, () => setIsNotFound(true));

    setData(result);

    setSpin(false);
    
    if (result !== 'not found' && result !== 'disconnected') {
      if (result.results.length === 0) {
        setNoResults(true);
      };
          if (query === '') {
      setNoResults(false);
    };

    }


  }

  function getDataHandler(value, page = 1) {

       
      if (!isBlock) {
        setIsBlock(true);
        setTimeout(() => {
          console.log('запущена')
          getData(value, page);
          setIsBlock(false);
        }, 2000);
        
      } 

      }
      
  const alertMessage = 'Отсутствует сеть';
  const alertType = 'error';

  const curData = { page: 1, results: [], total_pages: 1, total_results: 0 };

  
 

  return (
    <div className="movie-app" >
      <div className="main">

        <Filter message={alertMessage} mode={mode} setMode={setMode} />
        { mode ? 
        <SearchForm getDataHandler={getDataHandler} setSavedValue={setSavedValue} />
        :
        null
        }
        
        <Offline>
          <div className='alertWrapper'>
          <AlertBox message={alertMessage} type={alertType}/>
        </div>
        </Offline>
        {
          isNotFound ? 
                  <Online>
        <div className='alertWrapper'>
          <AlertBox message='Запрашиваемые данные не найдены. Ошибка 404' type='error'/>
        </div>
        </Online>
          :
          null
        }
        {
          (noResults && mode)?
                  <div className='alertWrapper'>
          <AlertBox message='Поиск не дал результатов' type='error'/>
        </div>

          :
          null

        }

        
        
        
        {spin ? <LoadingSpin /> : <div></div>}

        {(data.results && mode) ? <CardList guestSessionId={guestId} list={data.results} /> : null }
        { !mode ?
        <CardListRouted curData={curData} guestSessionId={guestId}/>
        :
        null 
       }

      
      { mode ? <Pagin getDataDebounced={getDataHandler} page={data.page} totalPages={data.total_pages}/> : null }
     
     
      </div>
    </div>
  );
};

export default MovieApp;
