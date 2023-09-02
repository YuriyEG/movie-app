/* eslint-disable */

import React, { useState } from 'react';
import { Online, Offline } from 'react-detect-offline';
import debounce from '../../modules/debouce';

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

const MovieApp = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

  const [mode, setMode] = useState(true);

  const curData = JSON.parse(`{"page":2,"results":[{"adult":false,"backdrop_path":"/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg","genre_ids":[12,14,28],"id":122,"original_language":"en","original_title":"The Lord of the Rings: The Return of the King","overview":"Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.","popularity":99.323,"poster_path":"/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg","release_date":"2003-12-01","title":"The Lord of the Rings: The Return of the King","video":false,"vote_average":8.475,"vote_count":22137},{"adult":false,"backdrop_path":"/8rft8A9nH43IReybFtYt21ezfMK.jpg","genre_ids":[99],"id":899082,"original_language":"en","original_title":"Harry Potter 20th Anniversary: Return to Hogwarts","overview":"An enchanting making-of story told through all-new in-depth interviews and cast conversations, inviting fans on a magical first-person journey through one of the most beloved film franchises of all time.","popularity":55.464,"poster_path":"/jntLBq0MLR3hrwKaTQswxACRPMs.jpg","release_date":"2022-01-01","title":"Harry Potter 20th Anniversary: Return to Hogwarts","video":false,"vote_average":7.289,"vote_count":3039},{"adult":false,"backdrop_path":"/1SeydkGlChbUrYJeV95TNSLQsFt.jpg","genre_ids":[16,12,35,14],"id":125521,"original_language":"ja","original_title":"スレイヤーズ RETURN","overview":"Lina Inverse and Naga the White Serpent are back! What begins as a routine bandit-stomping turns into the adventure of a lifetime involving magical golems, an ancient Elven weapon and even someone bent on destroying the world. It's a predicament only Lina and Naga could get themselves in to.","popularity":7.433,"poster_path":"/fNQx9YD4nxpcWvriVm1paIxbMwB.jpg","release_date":"1996-08-03","title":"Slayers Return","video":false,"vote_average":6.512,"vote_count":1794},{"adult":false,"backdrop_path":"/5D4sx3UuCCTDrz6BW20pcEur2pm.jpg","genre_ids":[37,10770],"id":390555,"original_language":"en","original_title":"Bonanza: The Return","overview":"A man with a grudge against the late Little Joe seeks revenge on the Cartwrights and attempts to take over the Ponderosa.","popularity":5.873,"poster_path":"/aOGanl6gCD9EFUYVYMcQscUooLT.jpg","release_date":"1993-11-24","title":"Bonanza: The Return","video":false,"vote_average":6.359,"vote_count":195},{"adult":false,"backdrop_path":"/4QLdZ2A8mkDWp2rpfgDrwmeCtUW.jpg","genre_ids":[28,12,80],"id":47971,"original_language":"en","original_title":"xXx: Return of Xander Cage","overview":"Extreme athlete turned government operative Xander Cage comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.","popularity":66.106,"poster_path":"/hba8zREJpP1AYhaXgb2oJLQeO0K.jpg","release_date":"2017-01-13","title":"xXx: Return of Xander Cage","video":false,"vote_average":6.13,"vote_count":8499},{"adult":false,"backdrop_path":"/bAROb1jil1K8PpbdKhLYPp28kNc.jpg","genre_ids":[27,878,35],"id":616073,"original_language":"en","original_title":"Return to Horror Hotel","overview":"Return to Horror Hotel is an anthology feature with 4 segments. One is about giant a bedbugs, one is about a magical charm that turns girls beautiful, one is about a WWII sailor who hasn't aged and one is about a terrorizing severed hand.","popularity":8.021,"poster_path":"/kP4wYsysronwnEC548MqclI5LP2.jpg","release_date":"2019-06-13","title":"Return to Horror Hotel","video":false,"vote_average":6.589,"vote_count":168},{"adult":false,"backdrop_path":"/iYZvkraRXAuEWIPnTVKT0iwMzev.jpg","genre_ids":[53,9648,27],"id":1070442,"original_language":"zh","original_title":"纸人回魂","overview":"","popularity":4.042,"poster_path":"/o9iZdYryvIXdRJMX8ZkYMBY2ORs.jpg","release_date":"2023-01-06","title":"The Paper Man Returns","video":false,"vote_average":6.591,"vote_count":22},{"adult":false,"backdrop_path":"/7anDPHcA7Ylh98OdfcZsQ2nlEhz.jpg","genre_ids":[16,10751,28,12,18,14],"id":36897,"original_language":"ja","original_title":"ポケットモンスター ミュウツー! 我ハココニ在リ MEWTWO SAGA","overview":"The Team Rocket leader, Giovanni, has found Mewtwo in a remote area of the Johto region. As Giovanni tries to re-capture Mewtwo, Ash and his friends are kidnapped by Domino, a new Team Rocket member, while trying to rescue Pikachu from Jessie and James. The Clone Pokemon are also captured and are then used as bait for Mewtwo. The situation then becomes a battle between the wills of Mewtwo and Giovanni; and Mewtwo also tries to discover if it and the clones have a purpose in life, even though they are products of science.","popularity":13.766,"poster_path":"/zIYljUBF2rXzB0yYZVEPY1l8zHp.jpg","release_date":"2001-08-17","title":"Pokémon: Mewtwo Returns","video":false,"vote_average":6.615,"vote_count":334},{"adult":false,"backdrop_path":"/cUwGkCLBwTafdk7YqaNCZll59Bt.jpg","genre_ids":[18],"id":1113693,"original_language":"en","original_title":"Write Me A Letter When You Return Home","overview":"75-year-old Enola Niaga finds comfort in writing letters back and forth with her sweetheart.","popularity":1.455,"poster_path":"/cz8bF7wG2mpF6keXLBv6cJLFNlR.jpg","release_date":"2023-05-12","title":"Write Me A Letter When You Return Home","video":false,"vote_average":6.042,"vote_count":12},{"adult":false,"backdrop_path":"/uoOD6qqz4QFhgvhdsrrQUmkmAMc.jpg","genre_ids":[12,28,14],"id":1734,"original_language":"en","original_title":"The Mummy Returns","overview":"Rick and Evelyn O’Connell, along with their 8-year-old son Alex, discover the key to the legendary Scorpion King’s might: the fabled Bracelet of Anubis. Unfortunately, a newly resurrected Imhotep has designs on the bracelet as well, and isn’t above kidnapping its new bearer, Alex, to gain control of Anubis’s otherworldly army.","popularity":42.084,"poster_path":"/kdJsW7hcy1lrj7tdMPycTAQPAiR.jpg","release_date":"2001-05-04","title":"The Mummy Returns","video":false,"vote_average":6.35,"vote_count":6411},{"adult":false,"backdrop_path":"/fSFlM6V8dHTzoCgH1sxxYfRYYUd.jpg","genre_ids":[18,28,36,53],"id":47854,"original_language":"cn","original_title":"精武風雲","overview":"The Japanese forces occupy Shanghai and slowly start spreading terror in the city. Chen Zhen, who was presumed dead, returns to fight against the Japanese and put an end to their tyrannical rule.","popularity":11.873,"poster_path":"/qT6KI2jNiskkB4VuNz4uN0ng4Ro.jpg","release_date":"2010-09-01","title":"Legend of the Fist: The Return of Chen Zhen","video":false,"vote_average":6.8,"vote_count":286},{"adult":false,"backdrop_path":"/vEPTtXC7qhFMF6qOqqDe1uswI7d.jpg","genre_ids":[28],"id":48301,"original_language":"zh","original_title":"少林搭棚大師","overview":"The workers of a dye factory have their pay cut by 20% when the factory owner brings in some Manchu thugs to try and increase production. Desperate to reclaim their full wages, the workers hire an actor to impersonate a priest and kung-fu expert from the temple of Shaolin. The factory owner proves the actor a fraud, and punishes all those involved. The young actor feels he has let the workers down, and promises to atone. He sets out for Shaolin, determined to be accepted as a kung-fu pupil at the elite temple.","popularity":10.505,"poster_path":"/llpg6eSXeD6TOoo5sDQOUZTCtaZ.jpg","release_date":"1980-08-24","title":"Return to the 36th Chamber","video":false,"vote_average":6.642,"vote_count":144},{"adult":false,"backdrop_path":null,"genre_ids":[16,27],"id":48628,"original_language":"ja","original_title":"超神伝説うろつき童子 未来篇","overview":"As the Overfiend slumbers, the mad emperor Caesar rises to power, enslaving a new race of demon beasts. Into this cruel existence is born the Lord of Chaos, the Overfiend's nemesis. As the blood-thirsty beasts capture the tyrant's daughter in a brutal coup, the Overfiend must awaken to an apocalyptic battle of the Gods.","popularity":4.703,"poster_path":"/ve47BKzivPD4C53BrkoItdWGE24.jpg","release_date":"1993-12-31","title":"Urotsukidōji III: Return of the Overfiend","video":false,"vote_average":6.036,"vote_count":42},{"adult":false,"backdrop_path":"/oAz2GaClhIQqNKSwqAVDSlY1jUj.jpg","genre_ids":[878,28,53],"id":421467,"original_language":"ja","original_title":"ゴジラ","overview":"After a fishing boat is attacked, the sole surviving crew member realizes it is none other than a resurrected Godzilla. However, efforts to bring the story to light are suppressed by the Japanese government amid growing political tensions between the United States and the Soviet Union, who are both willing to bomb Japan to stop the monster.","popularity":17.525,"poster_path":"/dP1ISBkknJ7eh01Co2Q58dxv6vu.jpg","release_date":"1984-12-15","title":"The Return of Godzilla","video":false,"vote_average":7.105,"vote_count":152},{"adult":false,"backdrop_path":"/vmerOthw0hB4OQzTWpwgIKKs2qv.jpg","genre_ids":[10749,14,18],"id":382217,"original_language":"ko","original_title":"가려진 시간","overview":"Days after her friends disappear during a trip to a mysterious cave, a girl is approached by a grown man claiming to be one of her missing pals.","popularity":13.018,"poster_path":"/1yqUrXgGOF3StwFc2d2buWe39vr.jpg","release_date":"2016-11-10","title":"Vanishing Time: A Boy Who Returned","video":false,"vote_average":7.005,"vote_count":100},{"adult":false,"backdrop_path":"/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg","genre_ids":[28,14],"id":364,"original_language":"en","original_title":"Batman Returns","overview":"While Batman deals with a deformed man calling himself the Penguin, an employee of a corrupt businessman transforms into the Catwoman.","popularity":32.699,"poster_path":"/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg","release_date":"1992-06-18","title":"Batman Returns","video":false,"vote_average":6.905,"vote_count":5926},{"adult":false,"backdrop_path":"/gBzyD14X6jzHmX7FLroOCFfj9GM.jpg","genre_ids":[16,12,14],"id":763539,"original_language":"en","original_title":"Gulliver Returns","overview":"World traveler and adventurer Gulliver is invited to return to Lilliput, the town he previously saved from the enemy fleet of the neighboring Blefuscu.","popularity":7.059,"poster_path":"/76ZSoIbdCQuPo2dW6Na7XybL1ax.jpg","release_date":"2021-08-19","title":"Gulliver Returns","video":false,"vote_average":5.389,"vote_count":36},{"adult":false,"backdrop_path":"/mn1YEB7D9JLIevqD0ktR1byrVMO.jpg","genre_ids":[18],"id":11190,"original_language":"ru","original_title":"Возвращение","overview":"The relationships among two pre-pubescent brothers and their estranged father are tested on a trip into the Russian wilderness.","popularity":8.875,"poster_path":"/7V8iHBs34cPYw7ohpLqliF9x8Gv.jpg","release_date":"2003-06-25","title":"The Return","video":false,"vote_average":7.427,"vote_count":460},{"adult":false,"backdrop_path":"/70tfSdpFBXI8VzELLc015aN9kwa.jpg","genre_ids":[12,18],"id":13888,"original_language":"en","original_title":"Return to the Blue Lagoon","overview":"In this sequel to the 1980 classic, two children are stranded on a beautiful island in the South Pacific. With no adults to guide them, the two make a simple life together and eventually become tanned teenagers in love.","popularity":27.154,"poster_path":"/jhUTLuPgc3Qcvr5xtji8oiWSfYy.jpg","release_date":"1991-08-02","title":"Return to the Blue Lagoon","video":false,"vote_average":6.239,"vote_count":1075},{"adult":false,"backdrop_path":"/7EvBCDalYbDrzp9a69kCUYlszlw.jpg","genre_ids":[18,10749],"id":928720,"original_language":"zh","original_title":"隐入尘烟","overview":"Humble, unassuming Ma and timid Cao have been cast off by their families and forced into an arranged marriage. They have to combine their strength and build a home to survive. In the face of much adversity, an unexpected bond begins to blossom, as both Ma and Cao, uniting with Earth's cycles, create a haven for themselves in which they can thrive.","popularity":6.914,"poster_path":"/aRrbuzkG2lToSEgz7j9fXV5C7ka.jpg","release_date":"2022-07-08","title":"Return to Dust","video":false,"vote_average":6.845,"vote_count":84}],"total_pages":99,"total_results":1970}`);
  console.log(curData);


  const service = new Service();
  
  async function getData(query, page) {

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
  
      getData(value, page);
    
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

      
      <Pagin getDataDebounced={getDataDebounced} page={data.page} inputValue={inputValue}/>
      </div>
    </div>
  );
};

export default MovieApp;
