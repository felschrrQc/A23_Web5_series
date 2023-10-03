import { SerieCard } from '../components/';

const ListeSeries = ({ tabSeries, onSerieClick}) => {
  return (
    <>
      {tabSeries.map((serie, index) => (
        <SerieCard key={index} serie={serie} onSerieClick={onSerieClick} />
      ))}
    </>
  );
  
};

export default ListeSeries;