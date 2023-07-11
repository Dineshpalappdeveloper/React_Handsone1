import React from "react";

function FunctionCompo(){
    let functionStyle= {new:{
        color:"green",
    }}
    return(
        <div className="functionComponent">
            <h1 className=""> This is created using functional Component </h1>
            <h2 style={functionStyle.new}>This is done using external CSS</h2>
               <h3 style={{color:"blue"}}>This is done using inline CSS</h3>
        </div>
    )
}
export default FunctionCompo;