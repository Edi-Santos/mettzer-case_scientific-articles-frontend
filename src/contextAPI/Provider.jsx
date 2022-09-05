import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function Provider({ children }) {
  const [articles, setArticles] = useState([]);
  const apiKey = 'rduKwJUohjEXZm2OtckL3VvQ8PN5DpFz';

  const contextValue = useMemo(() => ({
    articles,
    setArticles,
    apiKey,
  }), [articles]);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default Provider;
