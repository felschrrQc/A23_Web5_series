import { useState } from "react";
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Home from "./Home";
import Layout from "./Layout";
import Profil from "./Profil";
import Login from "./Login";
import ListeSeries from "./ListeSeries";
import SeriePage from "./SeriePage";
import seriesList from "../data/series_etape2_list.json";
import seriesDetails from "../data/series_etape2_details.json";

function App() {
  const [username, setUsername] = useState("");
  const [favoritesSeries, setFavoritesSeries] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // Récupération du nom d'utilisateur + connexion
  const handleLogin = (newUsername) => {
    setUsername(newUsername);
    setLoggedIn(true);
  };

  // Déconnexion + vide les données utilisateurs
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setFavoritesSeries([]);
  };

  // Ajoute une série aux favoris & empêche d'ajouter plusieurs fois la même série 
  const addToFavorites = (serieToAdd) => {
    const isAlreadyInFavorites = favoritesSeries.some((favSerie) => favSerie.id === serieToAdd.id);
    if (!isAlreadyInFavorites) {
      setFavoritesSeries([...favoritesSeries, serieToAdd]);
    }
  };

  const routes = loggedIn ? [
    {
      path: '/',
      element: <Layout loggedIn={loggedIn} onLogout={handleLogout}/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          index: true,
        },
        {
          path: '/serie/:serieTitle',
          element: <SeriePage seriesList={seriesList} seriesDetails={seriesDetails} addToFavorites={addToFavorites} />
        },
        {
          path: '/trending',
          element: <ListeSeries tabSeries={seriesList} />
        },
        {
          path: '/favorites',
          element: <ListeSeries tabSeries={favoritesSeries} />
        },
        {
          path: '/profil',
          element: <Profil username={username} favorite={favoritesSeries.length} />
        },
        {
          path: '/*',
          element:<Navigate to="/"/>,
        }
      ]
    }
  ] : [
    {
      path: '/',
      element: <Layout loggedIn={loggedIn} onLogout={handleLogout}/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          index: true,
        },
        {
          path: '/login',
          element: <Login onLogin={handleLogin}/>
        },
        {
          path: '/*',
          element:<Navigate to="/"/>,
        },
      ]
    }
  ];

  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;
