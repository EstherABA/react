import React from "react";
import './Car.css'

class Car extends React.Component{
    constructor(props){
        super(props);
      
    }

    render(){
        return  <div className="car">
                    <img src={this.props.image} />
                    <h1> My {this.props.name}</h1>
                    <h2> My color is {this.props.color},</h2>
                    <h3> It's a bit older, from {this.props.year}</h3>
                </div>
    }
}

export default Car;