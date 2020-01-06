import React, { Component } from 'react'
import './Board.css'
import Square from '../Square/Square'
class Board extends Component{

    constructor()
        {
            super()
        }
        
        renderSquare(i) {
            return <Square value={i} />;
          }
    render()
        {   

            return (
                <div className="col" style={{margin:"50px"}}>
                    <table class="table" style={{width:"50px"}}>
                       <tbody>
                        <tr>
                            <td>{this.renderSquare(0)}</td>
                            <td>{this.renderSquare(1)}</td>
                            <td>{this.renderSquare(2)}</td>
                        </tr>
                        <tr>
                            <td>{this.renderSquare(3)}</td>
                            <td>{this.renderSquare(4)}</td>
                            <td>{this.renderSquare(5)}</td>
                        </tr>
                        <tr>
                            <td>{this.renderSquare(6)}</td>
                            <td>{this.renderSquare(7)}</td>
                            <td>{this.renderSquare(8)}</td>
                        </tr>
                        </tbody>
                    </table>
                        
                </div>
            )
        }

}

export default Board