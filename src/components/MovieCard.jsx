import { Link } from "react-router-dom";

const MovieCard = ({ movie, addToWatchlist }) => {
  return (
    <div className="col-md-4 mb-4">

      <div className="card bg-dark text-light h-100 shadow">

        <div className="card-body">

          <h3 className="card-title text-warning">
            {movie.title}
          </h3>

          <p className="card-text">
            {movie.description}
          </p>

          <h5>{"⭐".repeat(movie.rating)}</h5>

          <Link
            to={`/movie/${movie.id}`}
            className="btn btn-warning me-2"
          >
            Details
          </Link>

          <button
            className="btn btn-outline-warning"
            onClick={() => addToWatchlist(movie)}
          >
            Watch Later
          </button>

        </div>
      </div>

    </div>
  );
};

export default MovieCard;