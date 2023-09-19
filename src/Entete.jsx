import StarRatings from 'react-star-ratings';

const Entete = ({ serie }) => {
    return (
        <div className="header">
            <ul style={{ listStyleType: 'none' }}>
                <li><h2>{serie.title}</h2></li>
                <li>
                    <span className="overview"><strong>Synopsis : </strong>{serie.overview}</span>
                </li>
                <li>
                    <span><strong>Note : </strong>
                        <StarRatings
                            rating={~~(serie.rating/2)}
                            starDimension="16px"
                            starSpacing="2px"
                        />
                    </span>
                </li>
                <li>
                    <span className="airedEpisodes"><strong>Nombre d'épisodes : </strong>{serie.aired_episodes}</span>
                </li>
                <li>
                    <span className="year"><strong>Année de production : </strong>{serie.year}</span>
                </li>
            </ul>
        </div>
    );
};

export default Entete;