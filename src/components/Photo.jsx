const Photo = ({ url }) => {
    return (
        <div className="poster">
            <img height="320" src={url} alt="Affiche de la série"/>
        </div>
    );
};

export default Photo;
