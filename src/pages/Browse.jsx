import React from "react";
import MovieList from "../components/MovieList";
import Profileimage from "../assets/browse-profileimg.png";
import { useNavigate } from "react-router-dom";
import "./Browse.css";

const Browse = () => {
  let navigate = useNavigate();

  return (
    <main className="browse-container">
      <div className="browse-header-main">
        <h1 className="browse-header">Super app</h1>
        <img
          src={Profileimage}
          alt="profile-image"
          className="browse-image"
          onClick={() => navigate("/display")}
        />
      </div>
      <p className="movie-para">Entertainment according to your choice</p>
      <MovieList />
    </main>
  );
};

export default Browse;
