import React from "react";
import UserInfo from "../components/UserInfo";
import Notes from "../components/Notes";
import Timer from "../components/Timer";
import News from "../components/News";
import Weather from "../components/Weather";
import "./Display.css";

const Display = () => {
  return (
    <main className="display-container">
      <div className="userinfo-main">
        <UserInfo />
      </div>

      <div className="notes-main">
        <Notes />
      </div>

      <div className="weather-main">
        <Weather />
      </div>

      <div className="news-main">
        <News />
      </div>

      <div className="timer-main">
        <Timer />
      </div>
    </main>
  );
};

export default Display;
