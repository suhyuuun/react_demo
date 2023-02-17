import axios from 'axios';
import { useEffect, useState } from 'react';
import NaverUrl from '../commonApi_naver/naverUrl';
import NaverHeaders from '../commonApi_naver/naverHeaders';
import NaverInfo from './Naver_info';

const Naver_Search = () => {
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [input, setInput] = useState('');
  //const search = naverUrl + 'query=아이언맨' + '&display=100';

  useEffect(() => {
    getSearchList();
  }, []);

  const getSearchList = async () => {
    await axios
      .get(NaverUrl + 'query=' + input + '&display=100', NaverHeaders)
      .then((response) => {
        console.log(response.data.items);
        setSearchMovieList(response.data.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleInputText = (e) => {
    //e.preventDefault();
    setInput(e.target.value);
  };

  const searchMv = async (e) => {
    e.preventDefault();
    getSearchList();
  };

  return (
    <div>
      <form onSubmit={searchMv}>
        <div>
          <input
            type='text'
            className='search_movie'
            required={true}
            placeholder='제목, 장르를 검색해주세요. (ex: 코미디 영화, 액션 영화)'
            onChange={handleInputText}
            value={input}
          />
          <input type='submit' value='검색' />
        </div>
      </form>
      <div className='movieList' style={{ marginTop: 20, marginLeft: 50 }}>
        <div>
          {searchMovieList.map((movie, index) => {
            return <NaverInfo movie={movie} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Naver_Search;
