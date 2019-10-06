import React from 'react';
import './App.css';
import { Splash } from './Splash.js';
import { Navbar } from './components/navbar';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarHidden: true,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isNavbarHidden === false ? null : (
          <Navbar navbarStatus={this.state.isNavbarHidden} />
        )}
        {/* <header className="App-header">
          <Splash />
        </header> */}
        <Routes />
      </div>
    );
  }
}

export default App;
