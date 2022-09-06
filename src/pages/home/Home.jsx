import { useContext, useEffect, useState } from 'react';

import Header from '../../components/globalComponents/Header';
import Main from '../../components/home/Main';

import request from '../../services/request';
import MyContext from '../../contextAPI/MyContext';

function Home() {
  const [page, setPage] = useState(1);
  const { setArticles, apiKey } = useContext(MyContext);

  useEffect(() => {
    const getArticles = async () => {
      const url = `https://core.ac.uk:443/api-v2/search/scientific?page=${page}&pageSize=10&apiKey=${apiKey}`;
      const method = 'GET';
      const headers = {
        'Content-type': 'application/json; charset=utf8',
      };

      const { data } = await request(url, method, headers);

      setArticles((prevState) => ({
        ...prevState,
        data,
      }));
    };

    getArticles();
  }, [page, setArticles, apiKey]);

  const handleClickPageUp = () => setPage(page + 1);

  const handleClickPageDown = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Header />
      <Main pageUp={ handleClickPageUp } pageDown={ handleClickPageDown } />
    </>
  );
}

export default Home;
