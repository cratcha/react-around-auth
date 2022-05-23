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
          <label className="login-form__input">
            <input
              className="login-form__textfield"
              name="name"
              placeholder="email"
              id="email"
              type="text"
              required
              onChange={setEmail}
            />
          </label>
          <label className="login-form__content">
            <input
              className="login-form__textfield"
              name="password"
              placeholder="password"
              id="password"
              type="text"
              required
              onChange={setPassword}
            />
          </label>
        </div>
        <div className="login-form__content">
          <button className="login-form__button" type="submit">
            Sign in
          </button>
          <p className='"login-form__text'>
            Not a member yet?
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
