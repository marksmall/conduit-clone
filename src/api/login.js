const API_ROOT = '/api';

const login = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${API_ROOT}/login`, options)
    .then(response => {
      console.log('Response: ', response);
      handleResponse(response);
    }) // Update the app state with the results of the API call.
    .then(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const register = user => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${API_ROOT}/register`, options).then(response =>
    handleResponse(response)
  );
};

const handleResponse = response => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
};

export const apiService = {
  login,
  logout,
  register
};
