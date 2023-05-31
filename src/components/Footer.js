import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Fb from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <Fb />
      </div>
    </div>
  );
}

export default Footer;
