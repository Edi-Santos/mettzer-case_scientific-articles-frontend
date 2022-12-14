import PropTypes from 'prop-types';

function ButtonRegister({ onClick }) {
  return (
    <button id="register-button" type="button" onClick={ onClick }>
      Cadastrar
    </button>
  );
}

ButtonRegister.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonRegister;
