import ClassCompo from "./component/ClassCompo";
import FunctionCompo from "./component/FunctionCompo";
import "./App.css"
import { useState } from "react";
function App() {

  const [fState,setFState]=useState(false);
  const [cState,setCState]=useState(false);
    return (
    <div className="parent">
        <h1 className="headingTop"> Styling  using  Functional  aur  Class Component   </h1>
        <div className="functionClassButton">
        <button className="functionButton" onClick={()=> setFState(!fState)}> To see styling in functional component </button>
        <button className="classButton"  onClick={()=> setCState(!cState)}>To see styling in class component </button>
        </div>
       <div className="bothComponent">
        {fState?   <FunctionCompo/> : ""}
     {cState ?   <ClassCompo/> : ""}
      
       </div>
       
    </div>
    );
  }
  
  export default App;
  