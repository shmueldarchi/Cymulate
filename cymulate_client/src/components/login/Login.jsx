import React, { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import {login} from '../../utils/login.utils';
function Login() {
  // Use the useState hook to define state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate ();

  // Define a submit handler for the form
  const handleSubmit = (event) => {
    event.preventDefault();
    login.then((response) => {
        // If the login is successful, set the JWT token in local storage
        localStorage.setItem('jwt', response.data.token);
        // Redirect to the dashboard
        navigate('/dashboard');
      })
      .catch((error) => {
        // If the login fails, set the error message
        setError(error.response.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export {Login}