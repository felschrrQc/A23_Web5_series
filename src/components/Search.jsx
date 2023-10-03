import { useState } from "react";
import SearchBar from "./SearchBar";
import ListeSeries from "./ListeSeries";
import SkeletonCard from "./SkeletonCard";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="flex flex-col items-center w-3/4 justify-center mx-auto">
      <h2 className="my-4 text-4xl font-bold dark:text-white mb-4">Rechercher une série</h2>
      <SearchBar onSearch={updateSearchResults}/>
      {searchResults && searchResults.length > 0 ? (
        <div id="searches" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center mt-12">
          <ListeSeries tabSeries={searchResults} />
        </div>
      ) : 
      <div className="my-12 flex flex-row gap-8">
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
      </div>
      }
    </div>
  );
};

export default Search;
