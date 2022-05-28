import React, {Component} from "react";
import Child from "./Child";
import Lugal from "./Lugal";

class App extends Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <Child/>
                <Lugal/>
            </div>
        );
    }
    
}

export default App;