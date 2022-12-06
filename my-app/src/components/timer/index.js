import React, { useState , useEffect} from "react";
import '../../../src/App.css';

const Timer = () => {
 const [count, setCount] = useState(0)
 const [isActive, setIsActive] = useState(false)

 useEffect(() => {
    let interval = null
    if(isActive) {
        interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)
    }
    return () => clearInterval(interval)
 }, [isActive, count])

 const start = () => {
    setIsActive(true)
 }
 const stop = () => {
    setIsActive(false)
    setCount(0)
 }

    return (
        <div className="container">
        <button className='button' type='button' onClick={start}>Start</button>
        <p>{count}</p>
        <button className='button' type="button" onClick={stop}>Stop</button>
        </div>
    )
}
export default Timer