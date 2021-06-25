import React, {useState} from 'react';

const FuntionCounter = () => {
    const [count, changeState] = useState(0);
    const [number, decrease] = useState(0);


    return (
        <div style={{textAlign: "center"}}>
            <h1>function counter:{count}</h1>
            <button onClick={()=> changeState(count + 1)}>Increase</button>
            &nbsp;
            <button onClick={()=> changeState(count - 1)}>Decrease</button>
        </div>
    );
}

export default FuntionCounter;
