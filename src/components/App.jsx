import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from "./Home";
import Layout from "./Layout";
import Profil from "./Profil";
import Login from "./Login";

import Serie from "./Serie";
import Search from "./Search";
import Trending from "./Trending";

function App() {

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [seriesList, setSeriesList] = useState([]);
  const [favoritesSeries, setFavoritesSeries] = useState([]);

  useEffect(() => {
    //  On récupère les données des séries par l'API
    const fetchSeries = async () => {
      try {
        const resp = await fetch('http://localhost:3000/api/series/trending');
        const tabSeries = await resp.json();
        setSeriesList(tabSeries.series);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des séries : ', error);
      }
    };
    fetchSeries();
  }, []);   

  // Récupération du nom d'utilisateur + connexion
  const handleLogin = (newUsername) => {
    setUser({ ...user, username: newUsername });
    setLoggedIn(true);
  };

  // Déconnexion + vide les données utilisateurs
  const handleLogout = () => {
    setLoggedIn(false);
    setUser({ username: '', password: '' });
    setFavoritesSeries([]);
  };

  // Ajoute une série aux favoris & empêche d'ajouter plusieurs fois la même série 
  const addToFavorites = (serieToAdd) => {
    const isAlreadyInFavorites = favoritesSeries.some((favSerie) => favSerie.id === serieToAdd.id);
    if (!isAlreadyInFavorites) {
      setFavoritesSeries([...favoritesSeries, serieToAdd]);
    }
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
          element: <Serie seriesList={seriesList} addToFavorites={addToFavorites} />
        },
        {
          path: '/trending',
          element: <Trending seriesList={seriesList}/>
        },
        {
          path: '/search',
          element: <Search />
        },
        {
          path: '/profil',
          element: <Profil user={user} favoritesSeries={favoritesSeries} />
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