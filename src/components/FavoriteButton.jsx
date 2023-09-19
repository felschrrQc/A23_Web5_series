import React, { useState } from 'react';

function FavoriteButton() {

  const [estFavori, setEstFavori] = useState(false);
  const toggleFavori = () => {
    setEstFavori(!estFavori);
  };

  return (
    <div>
      <button
        className={`btn favorite-btn ${estFavori ? 'favorite' : ''}`}
        onClick={toggleFavori}>
        {estFavori ? ' Enlever des ❤️' : 'Ajouter aux 🤍'}
      </button>
    </div>
  );
}

export default FavoriteButton;