const Photo = ({ url }) => {
  return (
    <div className="poster">
      <img
        className="max-h-96 w-auto rounded-lg mx-auto"
        src={url}
        alt="Affiche de la série"
      />
    </div>
  );
};

export default Photo;
