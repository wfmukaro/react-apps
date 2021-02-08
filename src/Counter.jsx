import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

const Counter = (props) => {
    const {name}=props
    const [votes, setVotes] = useState(0)
    const dispatch = useDispatch()


    const handleIncrement = () => {
        dispatch(increment());
        setVotes(votes+1)
    };
    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes-1);
    };
    
    
    
   
    return ( 
       <div style={{backgroundColor:"lightblue", margin:"10px"}}>
           <h2>{name}</h2>
           <h4>{`Votes: ${votes}`}</h4>
           <button onClick={handleIncrement}>Increment</button>
           <button onClick={handleDecrement}>Decrement</button>

       </div>
     );
}
 
export default Counter;
