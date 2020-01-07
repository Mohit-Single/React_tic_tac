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
          
          <Board></Board>
         
      </div>
      )
    }
  }

export default App;
