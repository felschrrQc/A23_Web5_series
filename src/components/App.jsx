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
  const { saveToStorage, getFromStorage, removeFromStorage } = useStorage("A23_Web5_series-");
  const savedUser = getFromStorage("user");
  let savedFavoritesSeries = getFromStorage("favoritesSeries");
  if(savedFavoritesSeries === null) {
    savedFavoritesSeries = [];
  }
  
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [favoritesSeries, setFavoritesSeries] = useState([]);
  const [serieId, setSerieId] = useState([]);
  
  useEffect(() => {
    if(savedUser){
      setUser(savedUser);
      setFavoritesSeries(savedFavoritesSeries);
      setLoggedIn(true);
    };
  }, []);


  // Récupération du nom d'utilisateur + connexion
  const handleLogin = (user) => {
    saveToStorage("user", user)
    setLoggedIn(true);
  };

  // Déconnexion + vide les données utilisateurs
  const handleLogout = () => {
    setUser({ username: '', password: ''});
    removeFromStorage("user");
    setFavoritesSeries([]);
    removeFromStorage("favoritesSeries");
    setLoggedIn(false);
  };

  // Ajoute une série aux favoris & empêche d'ajouter plusieurs fois la même série 
  const addToFavorites = (serieToAdd) => {
    setFavoritesSeries((prevFavorites) => {
      const isAlreadyInFavorites = prevFavorites.some((favSerie) => favSerie.id === serieToAdd.id);

      //Ajoute la série si elle n'est pas déjà dans le tableau
      if (!isAlreadyInFavorites) {
        const updatedFavorites = [...prevFavorites, serieToAdd];
        saveToStorage("favoritesSeries", updatedFavorites);
        return updatedFavorites;
      }

      // Si la série est déjà dans les favoris, la supprimer
      const updatedFavorites = prevFavorites.filter((favSerie) => favSerie.id !== serieToAdd.id);
      saveToStorage("favoritesSeries", updatedFavorites);
      return updatedFavorites;
    });
  };  

  const handleSerieClick = (serieId) => {
    setSerieId(serieId); // Mise à jour de l'ID de la série 
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
          element: <Serie serieId={serieId} addToFavorites={addToFavorites} favoritesSeries={savedFavoritesSeries} />
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
          element: <Profil user={savedUser} onSerieClick={handleSerieClick} favoritesSeries={savedFavoritesSeries} />
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