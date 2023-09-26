import { Entete, Photo, Trailer } from '../components';

const Serie = ({ serie, details, addToFavorites, estFavori }) => {
  return (
    <div className="serie w-2/3 border-2 border-white rounded-lg p-8 m-8 bg-gray-900 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="col-span-1">
          <Photo url={serie.poster} />
        </div>
        <div className="col-span-2">
          <Entete details={details} addToFavorites={addToFavorites } />
        </div>
        <div className="col-span-3">
          <Trailer url={details.trailer} />
        </div>
      </div>
    </div>
  );
};

export default Serie;
