/* eslint-disable */

import React, { useState } from 'react';
import { Online, Offline } from 'react-detect-offline';
import debounce from '../../modules/debouce';

import ServiceApi from '../../modules/service';
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

const MovieApp = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

  const [mode, setMode] = useState(true);



    const curData = JSON.parse(window.localStorage.getItem('defaultData'));


  

  const service = new ServiceApi();
  


  
  async function getData(query, page) {

    setNoResults(false);
    setIsNotFound(false);
    setSpin(true);
    const result = await service.getPageMovies(query, page, () => setIsNotFound(true));
    console.log('result: ', result);
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

  


  function getDataHandler(value, blocked) {
  
      getData(value, 2);
    
  }

  const getDataDebounced = debounce( getDataHandler, 700);

  const alertMessage = 'Отсутствует сеть';
  const alertType = 'error';


  return (
    <div className="movie-app">
      <div className="main">

        <Filter message={alertMessage} mode={mode} setMode={setMode} />
        { mode ? 
        <SearchForm getDataHandler={getDataDebounced} />
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

        {(data.results && mode) ? <CardList list={data.results} /> : null }
        { !mode ?
        <CardListRouted list={curData.results}/>
        :
        null 
       }
        


        <Pagin />
      </div>
    </div>
  );
};

export default MovieApp;
