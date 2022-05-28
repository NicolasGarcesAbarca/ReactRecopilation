import React ,{Component} from "react";

class AnotherComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {count,incrementCount} = this.props;
        return(
            <div style={{border:'3px solid hsl(140,80%,80%)'}}>
                <h2 onMouseOver={()=>{incrementCount()}}> hovered {count}</h2>
            </div>
        );
    }
}

export default AnotherComponent;