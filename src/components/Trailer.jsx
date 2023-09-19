const Trailer = ({ url }) => {
    return (
        <div className="trailer">
            <h2>Trailer :</h2>
            <iframe width="720" height="360" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
};

export default Trailer;
