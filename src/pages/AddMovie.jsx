import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import moviesData from "../data/data";

const AddMovie = () => {

  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const [title, setTitle] = useState("");

  const [rating, setRating] = useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const oldMovies =
      JSON.parse(localStorage.getItem("movies")) ||
      moviesData;

    const newMovie = {
      id: Date.now(),

      title,

      rating: Number(rating),

      description,

      image,
    };

    const updatedMovies = [
      ...oldMovies,
      newMovie,
    ];

    localStorage.setItem(
      "movies",
      JSON.stringify(updatedMovies)
    );

    navigate("/");
  };

  return (
    <div className="container mt-5">

      <div className="bg-dark p-5 rounded">

        <h1 className="text-warning text-center mb-5">
          Add New Movie
        </h1>

        <form onSubmit={handleSubmit}>

          {/* TITLE */}

          <input
            type="text"
            placeholder="Title"
            className="form-control mb-4 bg-secondary text-light border-0"
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          {/* IMAGE URL */}

          <input
            type="text"
            placeholder="Image URL"
            className="form-control mb-4 bg-secondary text-light border-0"
            onChange={(e) =>
              setImage(e.target.value)
            }
          />

          {/* RATING */}

          <input
            type="number"
            placeholder="Rating"
            min="1"
            max="5"
            className="form-control mb-4 bg-secondary text-light border-0"
            onChange={(e) =>
              setRating(e.target.value)
            }
          />

          {/* DESCRIPTION */}

          <textarea
            placeholder="Description"
            rows="5"
            className="form-control mb-4 bg-secondary text-light border-0"
            onChange={(e) =>
              setDescription(e.target.value)
            }
          ></textarea>

          {/* BUTTONS */}

          <button className="btn btn-warning me-3">

            Add Movie

          </button>

          <Link to="/">

            <button
              type="button"
              className="btn btn-secondary"
            >

              Back

            </button>

          </Link>

        </form>

      </div>

    </div>
  );
};

export default AddMovie;