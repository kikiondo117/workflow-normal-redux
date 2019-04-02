import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
