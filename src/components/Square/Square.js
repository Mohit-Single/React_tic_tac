import React, { Component } from 'react'
import './Square.css'
function Square(props){

    
   
            
            return (
                <div className="square" style={{textAlign:"center"}} onClick={props.onClick}>
                    <h1>{props.value}</h1>
                </div>

            )
       

}

export default Square