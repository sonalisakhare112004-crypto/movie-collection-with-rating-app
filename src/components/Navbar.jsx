import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">

        <Link className="navbar-brand text-warning" to="/">
          Movie App
        </Link>

        <div>
          <Link className="btn btn-warning mx-2" to="/">
            Home
          </Link>

          <Link
            className="btn btn-warning mx-2"
            to="/add-movie"
          >
            Add Movie
          </Link>

          <Link
            className="btn btn-warning mx-2"
            to="/watchlist"
          >
            Watchlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;