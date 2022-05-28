import React, { Component } from "react";

class Child extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {count,incrementCount} = this.props;
        return(
            <div>
                <h1>Child Component</h1>
                <h2>{count}</h2>
                <button onClick={()=>incrementCount()}>Increment</button>
            </div>
        );
    }
}

export default Child;