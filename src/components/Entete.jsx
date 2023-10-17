import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
import { UserAction } from "../components";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

function statusTranslate(status) {
  const statusMap = {
    'returning series': 'De retour',
    'continuing': 'En cours',
    'in production': 'En production',
    'planned': 'Prévue',
    'upcoming': 'À venir',
    'canceled': 'Annulée',
    'ended': 'Terminée',
  };

  return statusMap[status] || status;
}

const Entete = ({ details, addToFavorites, favoritesSeries }) => {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [estFavori, setEstFavori] = useState(false);

  useEffect(() => {
    // Vérifier si la série est dans les favoris
    const isFavorite = favoritesSeries && favoritesSeries.some((favSerie) => favSerie.id === details.id);
    setEstFavori(isFavorite);
  }, [favoritesSeries, details.id]);
  
  

  const handleAddToFavorites = () => {
    setEstFavori(!estFavori);
    addToFavorites(details);
  };

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  };

  const episodesList = details.seasons.map((season) => (
    <li key={season.number}>
      <strong>Saison {season.number}</strong> - {season.episodes.length} Épisodes
    </li>
  ));

  return (
    <div className="infos">
      <ul className="listeInfos flex flex-wrap justify-between items-center">
        <div className="recapSerie">
          <li className="title my-2">
            <h2 className="text-4xl font-bold dark:text-white">{details.title}</h2>
            <h6 className="text-2xl font-bold dark:text-white">{details.tagline}</h6>
          </li>
          <li className="synopsis">
            <span className="text-white"><strong>Synopsis : </strong>{details.overview}</span>
          </li>
        </div>
        <div className="infosSerie my-2">
          <li className="genre">
            <span className="text-white"><strong>Genre : </strong>{details.genres.map((genre, index) => (
              <span key={index}>{genre.charAt(0).toUpperCase() + genre.slice(1)}{index !== details.genres.length - 1 ? ', ' : ''}</span>
            ))}</span>
          </li>
          <li className="status">
            <span className="text-white"><strong>Statut : </strong>{statusTranslate(details.status)}</span>
          </li>
          <li className="airedEpisodes">
            <span className="text-white"><strong>Épisodes sortis : </strong>{details.aired_episodes}</span>
          </li>
        </div>
        <div className="production my-2">
          <li className="year">
            <span className="text-white"><strong>Année de production : </strong>{details.year}</span>
          </li>
          <li className="country">
            <span className="text-white"><strong>Pays d'origine : </strong>{details.country.toUpperCase()}</span>
          </li>
          <li className="network">
            <span className="text-white"><strong>Plateforme : </strong>{details.network}</span>
          </li>
        </div>
        </ul>
        <div className="userActions my-2">
          <div className="rating my-2">
            <span className="text-white">
              <strong>Note : </strong>
              <StarRatings
                rating={~~(details.rating / 2)}
                starDimension="16px"
                starSpacing="2px"
              /> sur {details.votes} votes
            </span>
          </div>
          <UserAction serie={details}/>
          <button
            id="favoriteBtn"
            className={`my-2 text-white bg-gray-500 hover:bg-gray700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700${estFavori ? 'favorite' : ''}`}
            onClick={handleAddToFavorites}>
            {estFavori ? ' Enlever des ❤️' : 'Ajouter aux 🤍'}
          </button>
        </div>
        <div className="showSeasonBtn my-2">
          <button onClick={toggleEpisodes} className="text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {showEpisodes ? <><AiOutlineEyeInvisible /> Épisodes par Saison</> : <><AiFillEye /> Épisodes par Saison</>}
          </button>
        </div>
        {showEpisodes && (
          <ul className="listeEpisodesSaisons">
              {episodesList}
          </ul>
        )}
    </div>
  );
};

export default Entete;
