import PropTypes from 'prop-types';

function ArticleCard({ articles }) {
  if (articles !== undefined) {
    return articles.map((article, index) => {
      const { _type } = article;
      // eslint-disable-next-line no-underscore-dangle
      const { title, description, authors, urls } = article._source;

      const eachAuthor = authors.map((author) => author);
      const eachURL = urls.map((url) => url);

      return (
        <div key={ index }>
          <h2>{ title }</h2>
          <h3>{ description }</h3>
          <h4>{ `Authors: ${eachAuthor}` }</h4>
          <a href={ eachURL }>link to article</a>
          <p>{ `Type: ${_type}` }</p>
        </div>
      );
    });
  }
}

ArticleCard.propTypes = {
  articles: PropTypes.shape({}).isRequired,
};

export default ArticleCard;