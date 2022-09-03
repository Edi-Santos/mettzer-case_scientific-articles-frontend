import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Cadastrar</h1>
      <p>Será feita caso sobre tempo para criar uma API para cadastrar usuários.</p>

      <button type="button" onClick={ () => navigate('/') }>Voltar</button>
    </>
  );
}

export default Register;
