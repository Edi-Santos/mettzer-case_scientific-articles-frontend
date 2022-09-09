import { useContext } from 'react';
import PropTypes from 'prop-types';

import ArticleCard from './ArticleCard';

import MyContext from '../../contextAPI/MyContext';

import './main.css';

function Main({ pageUp, pageDown }) {
  const { articles } = useContext(MyContext);
  const { data } = articles;

  return (
    <main className="main-home">
      <h2 className="title-main">ARTIGOS</h2>

      <section className="btn-article-container">
        <button id="previous" type="button" onClick={ pageDown }>Anterior</button>
        <button id="next" type="button" onClick={ pageUp }>Próxima</button>
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
