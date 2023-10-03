const Trailer = ({ url }) => {

  // Transforme l'url du fichier json en url utilisable avec <iframe>
  function transformYouTubeLinks(inputText) {
    return inputText.replace('/watch?v=', '/embed/');
  }
  const transformedUrl = transformYouTubeLinks(url);

  return (
    <div className="trailer">
      <h4 className="text-2xl font-bold dark:text-white mb-4">Trailer :</h4>
      <iframe
        className="w-full rounded-lg"
        width="640"
        height="480"
        src={transformedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
