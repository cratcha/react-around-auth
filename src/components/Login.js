import React from 'react';

import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    onLogin(userData);
  }
  return (
    <div className="login-form">
      <form className="login-form__form" onSubmit={handleSubmit}>
        <div className="login-form__content">
          <h3 className="login-form__title">Log in</h3>
          <input
            className="login-form__input"
            name="name"
            placeholder="Email"
            id="email"
            type="text"
            required
            onChange={setEmail}
          />
          <input
            className="login-form__input"
            name="password"
            placeholder="Password"
            id="password"
            type="password"
            required
            onChange={setPassword}
          />
        </div>
        <div className="login-form__content">
          <button className="login-form__button" type="submit">
            Sign in
          </button>
          <p className="login-form__text">
            Not a member yet?{' '}
            <Link className="login-form__link" to="/signup">
              Sign up here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
