import React, { Component } from "react";

class ClassCompo extends Component{

    render(){
        let classStyle= {new:{
            color:"black",
        }}
        return(
            <div className="classComponent">
             
                <h1 className=""> This is created using Class Component </h1>
                <h2 style={classStyle.new}>This is done using external CSS</h2>
               <h3 style={{color:"blue"}}>This is done using inline CSS</h3>
            </div>
        )
    }
}

export default ClassCompo;