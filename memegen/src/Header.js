import React from "react";
import Trollface from "./images/Trollface.png";

function Header() {
  return (
    <header>
      <img src={Trollface} alt="Problem?" />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
