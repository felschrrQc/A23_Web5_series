import { Link } from "react-router-dom";
import { useState } from "react";

const ListeSeries = ({ serie }) => {
  const [highlighted, setHighlighted] = useState(false);

  const toggleHighlight = () => {
    setHighlighted(!highlighted);
  };

  const cardClassName = `max-w-sm bg-white border border-gray-200 rounded-lg shadow ${
    highlighted ? "bg-blue-200" : "bg-gray-800 border-gray-700"
  }`;

  return (
    <>
      <div className={cardClassName} onClick={toggleHighlight}>
        <div className="flex justify-center items-center">
          <Link to={"/serie/"+serie.title} id={serie.title+"LinkImg"}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={serie.poster}
              alt={serie.title}
            />
          </Link>
        </div>
        <div className="p-5">
          <h5 id={serie.title} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serie.title}
          </h5>
          <Link
            to={"/serie/"+serie.title}
            id={serie.title+"Link"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default ListeSeries;