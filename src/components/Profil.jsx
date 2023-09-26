import { BiSolidMoviePlay } from 'react-icons/bi'
const Profil = ({ username, favorite}) => {
    return (
        <div className="flex justify-center items-center py-48">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10 px-4 pt-4">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={"../src/data/img/" + (Math.floor(Math.random() * 5) + 1) + ".jpg"}
                        alt={username + " profile picture"}
                    />
                    <h5 id="username" className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{username}</h5>
                    <h6 id="nbSeriesFav" className="text-lg font-medium dark:text-white"><BiSolidMoviePlay className='display: inline mx-2' />{"Nombre de séries favorites : "+favorite}</h6>
                </div>
            </div>
        </div>
    )
}

export default Profil;
