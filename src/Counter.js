import React, {useState} from "react";


const Counter = () => {
    const [num, setNumber] = useState(0);
    
    const increase = () => {
        setNumber(num+1);
        console.log(num);
    }
    
    const decrease = () => {
        setNumber(num-1);
        console.log(num);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
}

export default Counter;
