import { Link } from "react-router-dom";
import { useState } from "react";

const Home = (loggedIn) => {
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto my-32 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Bienvenue sur le site des séries</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin, tortor tristique dignissim euismod.</p>
          {!loggedIn ? (
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
              id="connexion"
            >
              Se connecter
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          ) : null}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../src/data/img/series.jpg" alt="Series" className="rounded-lg h-auto max-w-full shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
