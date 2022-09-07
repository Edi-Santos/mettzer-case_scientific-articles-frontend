import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonLogin from './ButtonLogIn';
import ButtonRegister from './ButtonRegister';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

import './formLogin.css';

function FormLogin() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const regExEmail = /\S+@\S+\.\S+/;
    const minPassword = 6;

    if (!regExEmail.test(email)) {
      // eslint-disable-next-line no-alert
      return alert('O Email deve ser um Email válido!!!');
    }

    if (password.length < minPassword) {
      // eslint-disable-next-line no-alert
      return alert('A senha deve conter, no mínimo, 6 dígitos!!!');
    }

    localStorage.setItem('user', email);

    return navigate('/home');
  };

  return (
    <form>
      <h1>Login</h1>

      <section className="input-container">
        <InputEmail email={ email } onChange={ handleChange } />
        <InputPassword password={ password } onChange={ handleChange } />
      </section>

      <section className="button-container">
        <ButtonLogin onClick={ handleClick } />
        <ButtonRegister onClick={ () => navigate('/register') } />
      </section>
    </form>
  );
}

export default FormLogin;
