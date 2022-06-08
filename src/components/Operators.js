import React from "react";
const Operators = ({ handleClick }) => {
   
   
   const operatorsButtons = ['+', '-','*','/'];
   return (   
    <div>
        {operatorsButtons.map((button) => (
<button onClick={handleClick} key ={button}>{button}</button>
        ))}
    </div>


);
}
 
export default Operators;