import React from 'react';
import {useState} from "react";

export default {
    title:'Use state'
}

function generateData() {
    //difficult counting
    console.log("generate data");
    return 12345
}

export const Example1 = () => {
    console.log("ex1")
    const [counter, setCounter] = useState(generateData);
    const changer = (state: number) => state + 1
    return(
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )

}