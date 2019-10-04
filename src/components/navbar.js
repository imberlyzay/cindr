import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className="nav-bar">
    <h1 id="game-name">Capstone Adventure</h1>
    <nav>
      <div>
        {/* <Link to="/profile">Profile</Link> */}
        {/* <Link to="/game">Game</Link> */}
        {/* <Link to="/map">Map</Link> */}
        {/* <Link to="/matches">Matches</Link> */}
        <Link to="/temp">TempLink</Link>
      </div>
    </nav>
    <hr />
  </div>
);
