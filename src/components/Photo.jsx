const Photo = ({ title, url }) => {
  return (
    <img
      className="w-auto rounded-lg mx-auto max-h-96"
      src={url || `https://placehold.co/500x750?text=${title}`}
      alt="Affiche de la série"
    />
  );
};

export default Photo;
