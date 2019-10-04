import React from 'react';
import './App.css';
import { Splash } from './Splash.js'
import { Navbar } from './components/navbar';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Splash />
      </header>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
