import { Link, NavLink, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Navbar({ loggedIn, onLogOut }) {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };
  const location = useLocation();

  const handleLogout = () => {
    onLogOut();
  };

  return (
    <nav className="bg-gray-900 mb-8 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><img src="../src/data/img/logo.png" className="h-12" alt="Logo du site" /></span>
        </Link>     
        {loggedIn && location.pathname !== "/search" && <SearchBar onSearch={updateSearchResults}/>}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center	 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0'
                id="home"
              >
                Accueil
              </NavLink>
            </li>
            {!loggedIn ? (
              <li>
                <NavLink
                  to="/login"
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                  id="login"
                >
                  Se connecter
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/trending"
                    className={({ isActive }) => (isActive ? 'active ' : '') + 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0'}
                    id="trending"
                  >
                    Tendances
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profil"
                    className={({ isActive }) => (isActive ? 'active ' : '') + 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0'}
                    id="profil"
                  >
                    Profil
                  </NavLink>
                </li>
                <li>
                <Link
                  to="/"
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={handleLogout}
                  id="logout">
                  Se déconnecter
                </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;