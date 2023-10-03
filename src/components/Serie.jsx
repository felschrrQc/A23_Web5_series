import { Entete, Photo, Trailer } from '../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SkeletonSerie from './SkeletonSerie';

const Serie = ({ seriesList, addToFavorites }) => {
  const [seriesDetails, setSeriesDetails] = useState(null);
  const { slugSerie } = useParams();
  const serie = seriesList.find(serie => serie.slug === slugSerie);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/series/${serie.id}`);
        const seriesDetails = await resp.json();
        setSeriesDetails(seriesDetails.serie);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la série : ', error);
      }
    };

    fetchDetails();
  }, [slugSerie, seriesList]);


    // Tant que seriesDetails n'est pas récupéré, affiche un skeleton
  if (!seriesDetails) {
    return (
     <SkeletonSerie/>
    );
  }

  // Une fois seriesDetails récupéré, affiche les composantes
  return (
    <div className="serie w-2/3 border-2 border-gray-500 rounded-lg p-8 m-8 bg-gray-800 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="col-span-1">
          <Photo url={seriesDetails.poster} />
        </div>
        <div className="col-span-2">
          <Entete details={seriesDetails} addToFavorites={addToFavorites} />
        </div>
        <div className="col-span-3">
          <Trailer url={seriesDetails.trailer} />
        </div>
      </div>
    </div>
  );
};

export default Serie;
