import React, {useEffect} from 'react';
import {useState} from "react";

export default {
    title:'UseEffect demo'
}


export const SimpleExample= () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("simple example");
    document.title = counter.toString();

   useEffect(() => {
       console.log("useEffect first time and when counter changed");

   },[counter]);

    useEffect(() => {
        console.log("useEffect first time render (componentDidMount)");

    },[])
    useEffect(() => {
        console.log("useEffect every render");

    })
    return(
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>Fake +</button>
        </>
    )

}