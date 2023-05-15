import React, { Component } from 'react';
import Game from './game';

class GamePage extends Component {
  render() {
    return (
      <div style={{ backgroundImage: 'url(/dark1.jpg)', backgroundSize: 'cover', height: '100vh', width: '100vw', overflowY: 'auto', position: 'fixed' }}>
        <Game />
      </div>
    );
  }
}


export default GamePage;