import { useParams } from "react-router-dom";
import { Serie } from "../components";

function SeriePage({ seriesList, seriesDetails, addToFavorites }) {
  
  // Récupère la bonne série en fonction de son nom
  const { serieTitle } = useParams();
  const serie = seriesList.find((s) => s.title === serieTitle);
  const details = seriesDetails[serie.id];

  return (
    <Serie serie={serie} details={details} addToFavorites={addToFavorites} />
  );
}

export default SeriePage;