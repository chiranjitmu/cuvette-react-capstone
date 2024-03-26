import React, { useState } from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import Errorimage from "../assets/error.png";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "100%", height: "60%" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "100%", height: "60%" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "100%", height: "60%" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "100%", height: "60%" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "100%", height: "60%" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "100%", height: "60%" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "100%", height: "60%" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "100%", height: "60%" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "100%", height: "60%" }} src={fiction} />,
  },
];

const Movies = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("Movies", JSON.stringify(selected));
      navigate("/browse");
    }
  };

  return (
    <main className="movies-container">
      {/* chip section */}
      <section className="movie-chippart">
        <h1 className="movie-header">Super app</h1>
        <p className="movie-para-1">Choose your entertainment category</p>

        <div
          style={{
            display: "flex",
            marginTop: "12px",
            marginBottom: "12px",
            gap: "12px",
            width: "100%",
            height: "auto",
            flexWrap: "wrap",
          }}
        >
          {selected.map((item) => (
            <MovieChip key={item} data={item} setSelected={setSelected} />
          ))}
        </div>
        {selected.length < 3 ? (
          <p
            style={{
              color: "red",
              fontWeight: "400",
              fontFamily: `"Roboto", sans-serif`,
            }}
          >
            <img src={Errorimage} alt="error-image" style={{ width: "20px" }} />{" "}
            Minimum 3 categories required
          </p>
        ) : (
          <></>
        )}
      </section>

      {/* box section */}
      <section className="movie-boxpart">
        <div className="moviebox">
          {genres.map((genres) => (
            <MovieBox
              key={genres}
              data={genres}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div className="movie-buttoncontainer">
          <button onClick={handleClick} className="movie-nextbutton">
            Next Page
          </button>
        </div>
      </section>
    </main>
  );
};

export default Movies;
