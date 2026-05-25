import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import moviesData from "../data/data";

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const storedMovies =
      JSON.parse(localStorage.getItem("movies")) ||
      moviesData;

    setMovies(storedMovies);

  }, []);

  return (

    <div className="container mt-5">

      <h1 className="text-center fw-bold mb-5">
        Movie Collection with Rating App
      </h1>

      <hr></hr>

      <div className="bg-dark p-4 rounded shadow">

        <h2 className="text-warning text-center mb-4">
          Movie List
        </h2>

        {movies.map((movie) => (

          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="d-flex align-items-center text-decoration-none border-bottom border-secondary p-3"
          >

            {/* IMAGE */}

            <img
              src={movie.image}
              alt={movie.title}
              width="80"
              height="100"
              className="rounded object-fit-cover"
            />

            {/* MOVIE NAME */}

            <div className="flex-grow-1 text-center">

              <h5 className="text-light mb-0">
                {movie.title}
              </h5>

            </div>

            {/* RATING */}

            <div>

              <span className="text-warning fs-5">
                {"★".repeat(movie.rating)}
              </span>

              <span className="text-secondary fs-5">
                {"★".repeat(5 - movie.rating)}
              </span>

            </div>

          </Link>

        ))}

      </div>

      {/* BUTTON */}

      <div className="text-center mt-4">

        <Link to="/add-movie">

          <button className="btn btn-warning px-4 py-2 fw-bold">

            Add New Movie

          </button>

        </Link>

      </div>

    </div>

  );
};

export default Home;