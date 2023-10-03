import ListeSeries from './ListeSeries';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profil = ({ user, favoritesSeries }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userImgUrl, setUserImgUrl] = useState("");

  useEffect(() => {
    // On choisit une des 5 images pour la photo de profil de l'utilisateur, obligé de mettre dans un useEffect à cause des tabs
    const imgUrl = "../src/data/img/" + (Math.floor(Math.random() * 5) + 1) + ".jpg";
    setUserImgUrl(imgUrl);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-1/2 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-32">
      <div className="flex flex-wrap flex-row justify-center items-center mt-4">
        <div id="userProfile" className="flex flex-col items-center pb-10 px-4 pt-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={userImgUrl}
            alt={user.username + " profile picture"}
          />
          <h5 id="username" className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{user.username}</h5>
          <h6 id="nbSeriesFav" className="text-lg font-medium dark:text-white">
            <BiSolidMoviePlay className='display: inline mx-2' />{"Nombre de séries favorites : " + favoritesSeries.length}
          </h6>
        </div>
        <div id="tabs" className="w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px border-b border-gray-700">
            <li className="mr-2">
              <Link
                className={`inline-block p-4 ${
                  activeTab === 'profile' ? 'border-b-2 border-blue-600 dark:border-blue-500' : 'border-transparent'
                } rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabChange('profile')}
              >
                Profile
              </Link>
            </li>
            <li className="mr-2">
              <Link
                className={`inline-block p-4 ${
                  activeTab === 'favorites' ? 'border-b-2 border-blue-600 dark:border-blue-500' : 'border-transparent'
                } rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${activeTab === 'favorites' ? 'active' : ''}`}
                onClick={() => handleTabChange('favorites')}
              >
                Favoris
              </Link>
            </li>
          </ul>

          <div className="p-4">
            {activeTab === 'profile' && (
              <div>
                <div id="profile">
                  Insérer plus tard le contenu pour l'onglet Profile
                </div>
              </div>
            )}
            {activeTab === 'favorites' && (
              <div>
                {favoritesSeries.length === 0 ? (
                  <div className="mx-32 text-center">
                    <p className="text-gray-500">Il n'y a aucune série disponible pour le moment.</p>
                  </div>
                ) : (
                  <div id="favorites" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-8">
                    <ListeSeries tabSeries={favoritesSeries} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
