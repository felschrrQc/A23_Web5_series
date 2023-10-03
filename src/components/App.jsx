import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from "./Home";
import Layout from "./Layout";
import Profil from "./Profil";
import Login from "./Login";
import Serie from "./Serie";
import Search from "./Search";
import Trending from "./Trending";
import { useStorage } from "../hooks/UseStorage"

function App() {
  const { saveToStorage, getFromStorage, removeFromStorage } = useStorage("series-");
  const savedUser = getFromStorage("user");
  
  useEffect(() => {
    if(savedUser){
      setUser(savedUser);
      setLoggedIn(true);
    };
  }, []);

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [favoritesSeries, setFavoritesSeries] = useState([]);
  const [serieId, setSerieId] = useState([]);

  // Récupération du nom d'utilisateur + connexion
  const handleLogin = (user) => {
    saveToStorage("user", user)
    setLoggedIn(true);
  };

  // Déconnexion + vide les données utilisateurs
  const handleLogout = () => {
    removeFromStorage("user");
    setLoggedIn(false);
    setUser({ username: '', password: ''});
    setFavoritesSeries([]);
  };

  // Ajoute une série aux favoris & empêche d'ajouter plusieurs fois la même série 
  const addToFavorites = (serieToAdd) => {
    const isAlreadyInFavorites = favoritesSeries.some((favSerie) => favSerie.id === serieToAdd.id);
    if (!isAlreadyInFavorites) {
      setFavoritesSeries([...favoritesSeries, serieToAdd]);
    }
    if(isAlreadyInFavorites){
      removeFromFavorites(serieToAdd)
    }
  };

  // Supprime une série des favoris
  const removeFromFavorites = (serieToRemove) => {
    const updatedFavorites = favoritesSeries.filter((favSerie) => favSerie.id !== serieToRemove.id);
    setFavoritesSeries(updatedFavorites);
  };

  const handleSerieClick = (serieId) => {
    setSerieId(serieId); // Mise à jour de l'ID de la série dans l'état de l'application
  };

  // Routes lorsque l'utilisateur est connecté
  const routesLoggedIn = [
    {
      path: '/',
      element: <Layout loggedIn={loggedIn} onLogout={handleLogout} />,
      children: [
        {
          path: '/',
          element: <Home loggedIn={loggedIn} />,
          index: true,
        },
        {
          path: '/serie/:slugSerie',
          element: <Serie serieId={serieId} addToFavorites={addToFavorites} favoritesSeries={favoritesSeries} />
        },
        {
          path: '/trending',
          element: <Trending onSerieClick={handleSerieClick}/>
        },
        {
          path: '/search',
          element: <Search onSerieClick={handleSerieClick}/>
        },
        {
          path: '/profil',
          element: <Profil user={savedUser} favoritesSeries={favoritesSeries} onSerieClick={handleSerieClick}/>
        },
        {
          path: '/*',
          element: <Navigate to="/" />,
        }
      ]
    }
  ];

  // Routes lorsque l'utilisateur est déconnecté
  const routesLoggedOut = [
    {
      path: '/',
      element: <Layout loggedIn={loggedIn} onLogout={handleLogout} />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: '/login',
          element: <Login onLogin={handleLogin} />
        },
        {
          path: '/*',
          element: <Navigate to="/" />,
        },
      ]
    }
  ];

  // Choix des routes en fonction de l'état de connexion
  const routes = loggedIn ? routesLoggedIn : routesLoggedOut;

  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;