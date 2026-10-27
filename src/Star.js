import React, { Component } from 'react';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = { on: false }; 
    this.handleClic = this.handleClic.bind(this); 
  }

  handleClic() {
    this.setState({ on: !this.state.on }); // El challenge: bach tbeddel l'état mel true lel false w l'inverse
  }

  render() {
    return (
      <img 
        src={this.state.on ? process.env.PUBLIC_URL + '/star_On.png' : process.env.PUBLIC_URL + '/star_Off.png'} 
        onClick={this.handleClic} 
        alt="etoile"
        style={{ cursor: 'pointer', width: '30px', margin: '2px' }}
      />
    );
  }
}

export default Star;