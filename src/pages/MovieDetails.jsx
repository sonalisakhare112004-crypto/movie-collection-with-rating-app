import {
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";

import moviesData from "../data/data";

const MovieDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const movies =
    JSON.parse(localStorage.getItem("movies")) ||
    moviesData;

  const movie = movies.find(
    (m) => m.id === Number(id)
  );

  const handleDelete = () => {

  const updatedMovies = movies.filter(
    (m) => m.id !== Number(id)
  );

  localStorage.setItem(
    "movies",
    JSON.stringify(updatedMovies)
  );

  navigate("/");
};

  return (

    <div className="container mt-5">

      <div className="bg-dark p-5 rounded shadow">

        {/* IMAGE */}

        <div className="text-center mb-4">

          <img
            src={movie?.image}
            alt={movie?.title}
            width="250"
            className="rounded"
          />

        </div>

        {/* TITLE */}

        <h1 className="text-warning text-center mb-4">

          {movie?.title}

        </h1>

        {/* DESCRIPTION */}

        <p className="text-light fs-5 text-center">

          {movie?.description}

        </p>

        {/* RATING */}

        <div className="text-center mt-4">

          <span className="text-warning fs-3">
            {"★".repeat(movie?.rating)}
          </span>

          <span className="text-secondary fs-3">
            {"★".repeat(5 - movie?.rating)}
          </span>

        </div>

        {/* BUTTON */}

        <div className="text-center mt-5">

  <button
    className="btn btn-danger me-3"
    onClick={handleDelete}
  >

    Delete Movie

  </button>

  <Link to="/">

    <button className="btn btn-warning">

      Back

    </button>

  </Link>

</div>

      </div>

    </div>

  );
};

export default MovieDetails;