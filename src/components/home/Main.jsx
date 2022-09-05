import { useContext } from 'react';

import ArticleCard from './ArticleCard';

import MyContext from '../../contextAPI/MyContext';

function Main() {
  const { articles } = useContext(MyContext);
  const { data } = articles;

  return (
    <main>
      <h2>ARTIGOS</h2>
      <ArticleCard articles={ data } />
    </main>
  );
}

export default Main;
