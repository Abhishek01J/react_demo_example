import { useState } from "react";
function Counter (){
const[count , setCount]=useState(0);


    const handleIncre=()=>{
console.log("Increment");
setCount(count+1)
    }

    const handleDecre=()=>{
console.log("Decrement");
setCount(count-1)
    }
    
return(
<>
<h2>Counter example</h2>

<h3>count: {count}</h3>
<button type="button" onClick={handleIncre}>+</button>
<button type="button" onClick={handleDecre}>-</button>
</>
);
}
export default Counter;