import ListeSeries from "./ListeSeries";

const Trending = ({seriesList}) => {
    return(
        <div className="mx-32">
            <h1 className="text-5xl font-extrabold dark:text-white mb-8">Séries en tendances :</h1>
            {seriesList.length === 0 ? (
                  <div className="mx-32 text-center">
                    <p className="text-gray-500">Il n'y a aucune série disponible pour le moment.</p>
                  </div>
                ) : (
                    <div id="trending" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
                    <ListeSeries tabSeries={seriesList} />
                </div>
                )}

        </div>
    )
}

export default Trending;