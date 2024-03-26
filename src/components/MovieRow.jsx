import React, { useEffect, useState } from "react";
import "./MovieRow.css";

const MovieRow = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTH_TMDB,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results.slice(0, 4)))
      .catch((err) => console.error("error:" + err));
    console.log(movies);
  }, [genre.id]);

  return (
    <section className="movierow-container">
      <p className="browse-genre-name">{genre.name}</p>
      <div className="movieRowmain">
        {movies.map((movie, index) => (
          <div key={index}>
            <div>
              <img
                style={{
                  objectFit: "cover",
                  margin: "0.5rem",
                  borderRadius: "10px",
                }}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieRow;
