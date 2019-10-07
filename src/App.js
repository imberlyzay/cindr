import React from 'react';
import './App.css';
import { Splash } from './Splash.js';
import { Navbar } from './components/navbar';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarHidden: true,
    };
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          {this.state.isNavbarHidden === false ? null : (
            <Navbar navbarStatus={this.state.isNavbarHidden} />
          )}
          {/* <header className="App-header">
            <Splash />
          </header> */}
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
