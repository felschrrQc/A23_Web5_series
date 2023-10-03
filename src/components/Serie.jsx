import { Entete, Photo, Trailer } from '../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SkeletonSerie from './SkeletonSerie';

const Serie = ({ serieId, favoritesSeries, addToFavorites }) => {
  const [seriesDetails, setSeriesDetails] = useState(null);
  const { slugSerie } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/series/${serieId}`);
        const seriesDetails = await resp.json();
        setSeriesDetails(seriesDetails.serie);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la série : ', error);
      }
    };

    fetchDetails();
  }, [slugSerie, serieId]);


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
        <div className="col-span-1 flex items-top">
          <Photo title={seriesDetails.title} url={seriesDetails.poster} />
        </div>
        <div className="col-span-2">
          <Entete details={seriesDetails} addToFavorites={addToFavorites} favoritesSeries={favoritesSeries} />
        </div>

        {/* Certaines séries n'ont pas de trailer */}
        {seriesDetails.trailer ? 
          <div className="col-span-3">
            <Trailer url={seriesDetails.trailer} />
          </div> 
        : 
        <div className="col-span-3">
          <div className="trailer">
            <h4 className="text-2xl font-bold text-white mb-4">Pas de trailer disponible</h4>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Serie;
