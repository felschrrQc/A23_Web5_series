import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (user.username.trim() === '' || user.password.trim() === '') {
      alert('Veuillez remplir tous les champs.');
    } else {
      setLoggedIn(true);
      onLogin(user.username);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="w-1/3 mx-auto border p-8 border-gray-500 rounded-lg shadow-lg bg-gray-800">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
            placeholder="Nom d'utilisateur..."
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
            placeholder="Mot de passe..."
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          id="loginBtn"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;