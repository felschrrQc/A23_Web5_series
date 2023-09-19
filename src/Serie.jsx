import Entete from "./Entete";
import Photo from "./Photo";
import Trailer from "./Trailer";

const Serie = ({ serie }) => {
    return (
        <>
        <div className="grid">
            <Photo url={serie.poster}/>
            <Entete serie={serie}/>
            <Trailer url={serie.trailer} />
        </div>
        </>
    );
};

export default Serie;
