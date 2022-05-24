class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register({ email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
      })
      .then((res) => {
        return res;
      });
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      return response.json();
    });
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((res) => {
        return res;
      });
  }
}

const auth = new Auth({
  baseUrl: 'https://register.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default auth;
