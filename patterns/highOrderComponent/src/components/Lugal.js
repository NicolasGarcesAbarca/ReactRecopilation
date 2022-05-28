import React, { Component } from "react";
import withCount from "./withCount";

class Lugal extends Component {
  
  render() {
      //here destructure the state from withCount hoc
      const {count,incrementCount}=this.props;
    return (
      <div style={{'border':'solid 2px'}}>
        <p>this is a normal class component</p>
        <h3>{count}</h3>
        <button onClick={incrementCount}>++</button>
      </div>
    );
  }
}

export default withCount(Lugal);