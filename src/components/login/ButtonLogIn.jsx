import PropTypes from 'prop-types';

function ButtonLogin({ onClick }) {
  return (
    <button id="login-button" type="button" onClick={ onClick }>
      Entrar
    </button>
  );
}

ButtonLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLogin;
