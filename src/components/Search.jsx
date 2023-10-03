import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListeSeries from "./ListeSeries";
import SkeletonCard from "./SkeletonCard";

const Search = ({ onSerieClick }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [originalResults, setOriginalResults] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const updateSearchResults = (results) => {
    setSearchResults(results);
    setOriginalResults(results); // Sauvegarde une copie non triée des résultats
    setHasSearched(true);
    setShowSkeletons(true);
  };

  // Fonction pour trier les séries en fonction de l'option sélectionnée
  const sortSeries = (option) => {
    if (option === "default") {
      setSearchResults(originalResults); // Rétablit l'ordre d'origine
      return;
    }

    const sortedResults = [...searchResults];

    if (option === "yearCroissant") {
      sortedResults.sort((a, b) => a.year - b.year);
    } else if (option === "yearDecroissant") {
      sortedResults.sort((a, b) => b.year - a.year);
    } else if (option === "nameAZ") {
      sortedResults.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "nameZA") {
      sortedResults.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSearchResults(sortedResults);
  };

  return (
    <div className="mx-32">
      <div className="flex flex-col items-center w-3/4 justify-center mx-auto">
        <h2 className="my-4 text-4xl font-bold text-white mb-4">Rechercher une série</h2>
        <SearchBar onSearch={updateSearchResults} />
        <div className="inline mt-4">
          <label htmlFor="sortDropdown" className="mr-2 text-sm font-medium text-white">
            Trier par :
          </label>
          <select
            id="sortDropdown"
            className="border p-2 text-sm rounded-md text-gray-100 bg-gray-700 border-gray-600"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              sortSeries(e.target.value);
            }}
          >
            <option value="default">Par défaut</option>
            <option value="nameAZ">Nom (A à Z)</option>
            <option value="nameZA">Nom (Z à A)</option>
            <option value="yearCroissant">Année (croissante)</option>
            <option value="yearDecroissant">Année (décroissante)</option>
          </select>
        </div>
        <div className="mt-12">
          {searchResults.length > 0 ? (
            <div id="searches" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              <ListeSeries tabSeries={searchResults} onSerieClick={onSerieClick} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
