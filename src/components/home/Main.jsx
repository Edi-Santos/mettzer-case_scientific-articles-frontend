import { useContext } from 'react';
import PropTypes from 'prop-types';

import ArticleCard from './ArticleCard';

import MyContext from '../../contextAPI/MyContext';

import './main.css';

function Main({ pageUp, pageDown }) {
  const { articles } = useContext(MyContext);
  const { data } = articles;

  return (
    <main>
      <h2>ARTIGOS</h2>

      <section className="btn-article-container">
        <button type="button" onClick={ pageDown }>Anterior</button>
        <button type="button" onClick={ pageUp }>Próxima</button>
      </section>

      <ArticleCard articles={ data } />
    </main>
  );
}

Main.propTypes = {
  pageUp: PropTypes.func.isRequired,
  pageDown: PropTypes.func.isRequired,
};

export default Main;
