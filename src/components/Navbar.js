import React, { useState } from "react";
import Logo from "../images/bloodborneLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="left" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Bloodborne" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/items"> Items </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="right">
        <Link to="/"> Home </Link>
        <Link to="/items"> Items </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
