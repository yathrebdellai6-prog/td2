import React, { Component } from 'react';
import Star from './Star';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Donne ton avis</h2>
        <div>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    );
  }
}

export default App;