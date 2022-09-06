import { useContext } from 'react';
import PropTypes from 'prop-types';

import ArticleCard from './ArticleCard';

import MyContext from '../../contextAPI/MyContext';

function Main({ pageUp }) {
  const { articles } = useContext(MyContext);
  const { data } = articles;

  return (
    <main>
      <h2>ARTIGOS</h2>
      <button type="button" onClick={ pageUp }>Próxima</button>
      <ArticleCard articles={ data } />
    </main>
  );
}

Main.propTypes = {
  pageUp: PropTypes.func.isRequired,
};

export default Main;
