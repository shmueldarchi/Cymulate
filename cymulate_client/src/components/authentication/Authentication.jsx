import React, { useState } from 'react';
import {Login} from '../login/Login';
import {Signup} from '../signup/Signup';

function Auth() {
  // Use the useState hook to define a state variable for the current form
  const [form, setForm] = useState('login');

  return (
    <div>
      {form === 'login' ? (
        <Login />
      ) : (
        <Signup />
      )}
      <button onClick={() => setForm(form === 'login' ? 'signup' : 'login')}>
        Switch to {form === 'login' ? 'Sign up' : 'Log in'}
      </button>
    </div>
  );
}

export {Auth}