import React, { useState } from "react";
import '../../../src/App.css';


 const Counter = () => {
 
    const [ count, setCount ] = useState(0)

    const decrement = () => {
        setCount( (currValue) => currValue - 1)
    }
    
    const increment = () => {
        setCount( (currValue) => currValue + 1)
    }

    return (
        <div className="container">
        <button className='button' type='button' onClick={decrement}>-</button>
        <p>{count}</p>
        <button className='button' type="button" onClick={increment}>+</button>
        </div>
    
    )
}

export default Counter

//useState is a Hook that lets you add React state to function components