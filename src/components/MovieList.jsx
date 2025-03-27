import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMovies } from '../Moveslice';
import './MovieList.css';  // Import the external CSS

const MovieList = () => {
  const Movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteMovies(id));
  };

  return (
    <div className="movie-list-container">
      {Movies.map((move) => (
        <div className="movie-card" key={move.id}>
          <div className="movie-info">
            <h2 className="movie-title">Name: {move.name}</h2>
            <h3 className="movie-tell">Tell:{move.Tell}</h3>
          </div>

          <div className="movie-image-container">
            <img
              className="movie-image"
              src={move.Image}
              alt={move.name}
            />
          </div>

          <button className="delete-button" onClick={() => handleDelete(move.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
