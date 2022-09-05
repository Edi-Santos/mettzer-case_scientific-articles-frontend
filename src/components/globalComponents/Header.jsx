import { useNavigate } from 'react-router-dom';

function Header() {
  const userData = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <header>
      <img src="" alt="espaço para logo" />

      <section>
        <h3>{ `Olá, ${userData} !!!` }</h3>

        <button type="button" onClick={ handleClick }>
          SAIR
        </button>
      </section>
    </header>
  );
}

export default Header;
