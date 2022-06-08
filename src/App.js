
import "./App.css";
import Operators from "./components/Operators";
import Numbers from "./components/Numbers";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
    const [input, setInput] = useState ("");
//function to calculate a results on a specific button click and update the states.

const calculate = (button) => {
 if (button === "=") {
    const result = evaluate(input);
    setInput(result);
 } else if (button === "c") {
     setInput ("");
 } else setInput (input + button);
  
};

const handleClick =(e) => {
    const display = e.target.textContent;
    calculate(display);
}
    return (  
            <div className="App">
                <h1> My calulator</h1>
                <h2>{input}</h2>
                <Operators handleClick={handleClick} />
                <Numbers handleClick={handleClick} />
            </div>

    );
};
 
export default App;