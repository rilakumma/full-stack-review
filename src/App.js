import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar />
        {/* <button onClick={this.login}>Login</button> */}
        {routes}
      </div>
    );
  }
}

export default App;
