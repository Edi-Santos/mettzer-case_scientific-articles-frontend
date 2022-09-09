import PropTypes from 'prop-types';

function InputEmail({ email, onChange }) {
  return (
    <label htmlFor="email">
      <p id="email-label">Email:</p>
      <input
        type="text"
        id="email"
        name="email"
        value={ email }
        onChange={ onChange }
        placeholder="Digite seu email aqui..."
      />
    </label>
  );
}

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputEmail;
