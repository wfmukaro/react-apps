import React, { useState } from 'react';

const Counter = () => {
    const [Count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(Count+1)
    }
    const handleDecrement = () => {
        setCount(Count-1)
    }
    
    
    
   
    return ( 
       <React.Fragment>
           <p>The count is: {Count}</p>
           <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleDecrement}>Decrement</button>

       </React.Fragment>
     );
}
 
export default Counter;
