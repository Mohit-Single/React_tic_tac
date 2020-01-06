import React, { Component } from 'react';
import './App.css';
import Board from '../components/Board/Board'
import Square from '../components/Square/Square'
class App extends Component{

  constructor()
    {
      super()
    }
  render()
  {
    return(
      <div>
          <h3 style={{margin:"70px"}}>Next Player : X</h3>
          <Board></Board>
          <h1>Footer</h1>
      </div>
      )
    }
  }

export default App;
