import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <nav>
          <Link to="/" className='nav-title'>Cindr</Link>
          <div className='nav-links'>
            <Link to="/profile">Profile</Link>
            <Link to="/game">Game</Link>
            <Link to="/map">Map</Link>
            <Link to="/matches">Comrades</Link>
          </div>
        </nav>
      </div>
    );
  }
}
