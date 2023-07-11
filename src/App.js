import ClassCompo from "./component/ClassCompo";
import FunctionCompo from "./component/FunctionCompo";
import "./App.css"
function App() {
    return (
    <div>
        <h1 className="headingTop"> ClassCompo and FunctionCompo Both are Below</h1>
        <div className="functionClassButton">
        <button className="functionButton" onClick={{}}> To see styling in functional component </button>
        <button className="classButton">To see styling in class component </button>
        </div>
       <div className="bothComponent">
       <FunctionCompo></FunctionCompo>
        <ClassCompo></ClassCompo>
       </div>
       
    </div>
    );
  }
  
  export default App;
  