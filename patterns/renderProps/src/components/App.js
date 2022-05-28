import React, {Component} from "react";
import Child from "./Child";
import Wrapper from "./Wrapper";
import AnotherComponent from "./AnotherComponent";
class App extends Component{
    constructor(props){
        super(props);    
    }
    render(){
        return(
            <div>
                <Wrapper render={(count,incrementCount)=><Child count={count} incrementCount={incrementCount}/>}/>
                <Wrapper render={(count,incrementCount)=><AnotherComponent count={count} incrementCount={incrementCount}/>}/>
            
            </div>
        );
    }
    
}

export default App;