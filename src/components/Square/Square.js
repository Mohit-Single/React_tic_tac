import React, { Component } from 'react'
import './Square.css'
class Square extends Component{

    constructor(props)
        {
            super(props)
            this.state= {
                value:null,
            }
        }

    render()
        {
            const x=this.props.value
            return (
                <div className="square" style={{textAlign:"center"}} onClick={()=>this.setState({value:'X'})}>
                    <h1>{this.state.value}</h1>
                </div>

            )
        }

}

export default Square