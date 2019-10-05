import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <h1 id="game-name">Cindr</h1>
        <nav>
          <div>
            <Link to="/temp">TempLink</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/game">Game</Link>
            <Link to="/map">Map</Link>
            <Link to="/matches">Matches</Link>
          </div>
        </nav>
      </div>
    );
  }
}
