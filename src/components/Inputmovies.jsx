import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddMovies } from '../Moveslice';
import './InputMovies.css';  // Import the external CSS file

const Inputmovies = () => {
  const [newMovies, setNewMovies] = useState("");
  const [Tells, SetTell] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newMovies || imageUrl || Tells) {
      dispatch(AddMovies({ name: newMovies, image: imageUrl, Tell: Tells }));
      setNewMovies("");
      setImageUrl(null);
      SetTell("");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageUrl(fileUrl); 
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="movie-form">
        <input
          type="text"
          onChange={(e) => setNewMovies(e.target.value)}
          value={newMovies}
          placeholder="Enter movie name"
          className="input-field"
        />
        
        <input
          type="number"
          onChange={(e) => SetTell(e.target.value)}
          value={Tells}
          placeholder="Enter phone number"
          className="input-field"
        />

        {imageUrl && (
          <div className="image-preview-container">
            <img src={imageUrl} alt="Movie Preview" className="image-preview" />
          </div>
        )}

        <input
          type="file"
          onChange={handleImageChange}
          className="file-input"
        />
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Inputmovies;
