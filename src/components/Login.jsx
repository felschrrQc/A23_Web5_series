import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            alert("Veuillez remplir tous les champs.");
        } else {
            setLoggedIn(true);
            onLogin(username);
        }
      };
    
      return loggedIn ? <Navigate to="/" replace /> : (
        <div className="mx-64">
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
              placeholder="Nom d'utilisateur..."
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400"
                    placeholder="Mot de passe..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="button" 
                id="loginBtn"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handleLogin}
            >
                Se connecter
            </button>
        </div>
    );
}

export default Login;
