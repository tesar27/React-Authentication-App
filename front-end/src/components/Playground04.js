import { useState, useReducer } from "react";

const Playground04 = () => {
    const [number, setNumber] = useReducer(
        (number, newNumber) => number + newNumber,
        0
    );

    const [num, setNum] = useState(0);

    const [answer, toggle] = useReducer(
        (ans) => !ans,
        false
    )

    const sum = (num) => num + num;
    
    return (
        <div className="grid text-5xl">
        <h1 onClick={() => setNumber(5)}>{number}</h1>
        <h1 onClick={() => setNum(10)}>{num}</h1>
        <h1 onClick={toggle}> { answer? "yes" : "no"} </h1>
        </div>
        
    )
}

export default Playground04;