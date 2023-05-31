import React from "react";
import { Link } from "react-router-dom";
import Bg from "../images/bloodborneBg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="header">
        <h1>Bloodborne</h1>
        <p> The hunt begins </p>
        <Link to="/">
          <button>LEARN MORE!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
