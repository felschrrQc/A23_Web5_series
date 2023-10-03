import { useEffect, useState } from "react";
import ListeSeries from "./ListeSeries";
import SkeletonCard from "./SkeletonCard";

const Trending = ({onSerieClick}) => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const resp = await fetch('http://localhost:3000/api/series/trending');
        const tabSeries = await resp.json();
        setTrendingList(tabSeries.series);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des séries : ', error);
      }
    };
    fetchSeries();
  }, []); 

  return (
    <div className="mx-32">
      <h1 className="text-5xl font-extrabold dark:text-white mb-8">Séries en tendances :</h1>
      {trendingList.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div id="trending" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
          <ListeSeries tabSeries={trendingList} onSerieClick={onSerieClick} />
        </div>
      )}
    </div>
  );
};

export default Trending;
