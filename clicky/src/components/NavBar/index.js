import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar sticky-top">
      <h2>
        <ul className="nav">
          <li>
            <a href="www">Click Game</a> 
        </li>
          <li>
            <h3>Click an image to begin!</h3>
            {/* render correct or incorect response */}
        </li>
          <li>
            Score
            {/* render score and top score */}
        </li>
        </ul>
      </h2>

    </nav>
  );
}

export default NavBar;