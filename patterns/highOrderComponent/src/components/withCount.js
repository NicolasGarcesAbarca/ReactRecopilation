import React, {Component} from 'react';
function withCount(WrappedComponent){
    class  NewComponent extends Component{
        //here put the state management code
        constructor(props){
            super(props);
            this.state={
                count:0
            }
        }

        incrementCount=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        //in the render use the wrapped component and pass the prop of state management
        //don't forget to pass {...this.props} so you can have more props than counter!
        render(){
            return(
                <WrappedComponent 
                incrementCount={this.incrementCount} 
                {...this.props} 
                count={this.state.count}/>
            )
        }
    }

    return NewComponent;
}


export default withCount;