import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import UserAction from './UserAction';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

function statusTranslate(status) {
  const statusMap = {
    'returning series': 'De retour',
    'continuing': 'En cours',
    'in production': 'En production',
    'planned': 'Prévue',
    'upcoming': 'À venir',
    'canceled': 'Annulée',
    'ended': 'Finie',
  };

  return statusMap[status] || status;
}

const Entete = ({ serie, episodes }) => {
  const [showEpisodes, setShowEpisodes] = useState(false);

  const toggleEpisodes = () => {
    setShowEpisodes(!showEpisodes);
  };

  const episodesList = episodes.map((episode) => (
    <li key={episode.number}>
      <strong>Saison {parseInt(episode.number)+1}</strong> - {episode.episodes.length} Épisodes
    </li>
  ));

  return (
    <div className="informations">
      <ul className="listeInfos">
        <div className="recapSerie">
          <li className='title'>
              <h2>{serie.title}</h2>
              <h6>{serie.tagline}</h6>
          </li>
          <li className="synopsis">
            <span><strong>Synopsis : </strong>{serie.overview}</span>
          </li>
          <li className='rating'>
            <span>
              <strong>Note : </strong>
              <StarRatings
                rating={~~(serie.rating / 2)}
                starDimension="16px"
                starSpacing="2px"
              /> sur {serie.votes} votes
            </span>
          </li>
        </div>
        <div className="infosSerie">
          <li className="genre">
            <span><strong>Genre : </strong>{serie.genres.map((genre, index) => (
              <span key={index}>{genre.charAt(0).toUpperCase() + genre.slice(1)}{index !== serie.genres.length - 1 ? ', ' : ''}</span>
            ))}</span>
          </li>
          <li className="status">
            <span><strong>Statut : </strong>{statusTranslate(serie.status)}</span>
          </li>
          <li className="airedEpisodes">
            <span><strong>Nombre d'épisodes : </strong>{serie.aired_episodes}</span>
          </li>
        </div>
        <div className="production">
          <li className="year">
            <span><strong>Année de production : </strong>{serie.year}</span>
          </li>
          <li className="country">
            <span><strong>Pays d'origine : </strong>{getUnicodeFlagIcon(serie.country)}</span>
          </li>
          <li className="network">
            <span><strong>Plateforme : </strong>{serie.network}</span>
          </li>
        </div>

        <li className='showSeasonBtn'>
          <button onClick={toggleEpisodes}>
            {showEpisodes ? <><AiOutlineEyeInvisible /> Épisodes par Saison</> : <><AiFillEye /> Épisodes par Saison</>}
          </button>
        </li>
        {showEpisodes && (
          <li className='listeEpisodesSaisons'>
            <ul>
              {episodesList}
            </ul>
          </li>
        )}
      </ul>
      <div className='userActions'>
        <UserAction />
      </div>
    </div>
  );
};

export default Entete;
