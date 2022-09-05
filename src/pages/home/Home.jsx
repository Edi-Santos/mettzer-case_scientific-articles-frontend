import { useContext, useEffect } from 'react';

import Header from '../../components/globalComponents/Header';
import Main from '../../components/home/Main';

import request from '../../services/request';
import MyContext from '../../contextAPI/MyContext';

function Home() {
  const { setArticles, apiKey } = useContext(MyContext);

  useEffect(() => {
    const getArticles = async () => {
      const url = `https://core.ac.uk:443/api-v2/search/scientific?page=1&pageSize=10&apiKey=${apiKey}`;
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
  }, [setArticles, apiKey]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Home;
