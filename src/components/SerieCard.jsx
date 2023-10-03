import { Link } from "react-router-dom";
import { useState } from "react";

const SerieCard = ({ serie, onSerieClick }) => {

  const handleSerieClick = () => {
    onSerieClick(serie.id);
  };

  return (
    <>
      <div className={"max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"}>
        <div className="flex justify-center items-center">
          <Link to={"/serie/"+serie.slug} id={serie.title+"LinkImg"}>
            <img
              className="rounded-lg"
              src={serie.poster || `https://placehold.co/500x750?text=${serie.title}`}
              alt={serie.title}
              onClick={handleSerieClick}
            />
          </Link>
        </div>
        <div className="pb-4">
          <h5 id={serie.title} className="m-4 text-xl font-bold tracking-tight text-white">
            {serie.title}
          </h5>
          <Link
            to={"/serie/"+serie.slug}
            id={serie.title+"Link"}
            className="inline-flex items-center px-3 py-2 mx-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={handleSerieClick}
          >
            Voir la série
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SerieCard;
