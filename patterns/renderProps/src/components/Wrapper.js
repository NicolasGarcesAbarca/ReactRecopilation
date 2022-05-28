import React, { Component } from "react";

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    //method of class: no need to write function just nameMethod(){}
    //method written normal don't keep this context!
    //use arrow function to keep this context
    incrementCount=()=>{
        this.setState(state=>({count:state.count+1}));
    }

    render(){
        return(
            <div style={{border:'2px solid hsl(240,80%,80%)'}}>
                {this.props.render(this.state.count,this.incrementCount)}
            </div>
        );
    }
}

export default Wrapper;