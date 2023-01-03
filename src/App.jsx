import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [errorMsg, setErrorMsg] = useState('')

  const isEmailEmpty = email.length === 0

  const passwordNotValid = password.length < 6

  async function handleLogin() {
    try {
      setErrorMsg('')

      let values = {
        email: email,
        password: password
      }

      setIsLoading(true)
      await login(values)

      alert('Login Efetuado com Sucesso!')

    } catch (err) {
      setErrorMsg(err.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMsg && (
          <div className='errorMessage'>{errorMsg}</div>
        )}

        <div className='row'>
          <label htmlFor={'email'}>Email</label>

          <input
            id={'email'}
            type={'email'}
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>

          <input
            id={'password'}
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='button'>
          <button
            onClick={handleLogin}
            disabled={isEmailEmpty || passwordNotValid || isLoading}
          >
            Login
          </button>
        </div>
      </div>
    </div >
  );
}
