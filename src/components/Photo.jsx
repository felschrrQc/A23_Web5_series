const Photo = ({ url }) => {
  return (
    <img
      className="w-auto rounded-lg mx-auto"
      src={url}
      alt="Affiche de la série"
    />
  );
};

export default Photo;
