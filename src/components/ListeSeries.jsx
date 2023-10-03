import { SerieCard } from '../components/';

const ListeSeries = ({ tabSeries }) => {
  return (
    <>
      {tabSeries.map((serie, index) => (
        <SerieCard key={index} serie={serie} />
      ))}
    </>
  );
  
};

export default ListeSeries;