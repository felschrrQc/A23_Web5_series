import React from 'react';
import { SerieCard } from '../components/';

const ListeSeries = ({ tabSeries }) => {
  // Vérifie si tabSeries est vide
  if (tabSeries.length === 0) {
    return (
      <div className="listeSeries mx-32 text-center">
        <p className="text-gray-500">Il n'y a aucune série disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="listeSeries mx-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {tabSeries.map((serie, index) => (
        <SerieCard key={index} serie={serie} />
      ))}
    </div>
  );
};

export default ListeSeries;
