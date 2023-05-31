import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
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
