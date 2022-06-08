import React from "react";
const Numbers = ({ handleClick }) => {
    
    
    const button =["9","8","7","6","5","4","3","2","1","C",".","0","=",];
   
    return (   
        <div>
            {button.map((button) => (
<button onClick = {handleClick} key ={button}>{button}</button>
            ))}
        </div>


    );
}
 
export default Numbers;