import React from "react";
import withCount from "./withCount";
//this is test high order applied to functional component

const Child=({count,incrementCount})=>{
    return(
        <div>
        <p>i never thought that hoc worked on functional!</p>
            <h3>{count}</h3>
            <button onClick={()=>incrementCount()}>++</button>
        </div>
    )
}

export default withCount(Child);