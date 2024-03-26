import React from "react";
import "./UserInfo.css";
import UserImg from "../assets/profile-img.png";

const UserInfo = () => {
  const userinfo = JSON.parse(localStorage.getItem("UserInfo"));
  const movies = JSON.parse(localStorage.getItem("Movies"));

  return (
    <section className="userinfo-container">
      <div>
        <img src={UserImg} alt="user-profile image" className="user-image" />
      </div>
      <div className="userinfo-main">
        <div className="user-infopart">
          <p className="user-name">{userinfo.name}</p>
          <p className="user-email">{userinfo.email}</p>
          <p className="user-username">{userinfo.username}</p>
        </div>

        <div className="user-movies">
          {movies.map((item, id) => (
            <p className="user-movielist" key={id}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
