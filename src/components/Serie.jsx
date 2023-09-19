import React from 'react';
import Entete from "./Entete";
import Photo from "./Photo";
import Trailer from "./Trailer";
import './Serie.css';

const Serie = ({ serie, episodes }) => {
  return (
    <div className="serie">
        <div className="serie-container">
            <Photo url={serie.poster} />
            <Entete serie={serie} episodes={episodes} />
        </div>
        <Trailer url={serie.trailer} />
    </div>
  );
};

export default Serie;