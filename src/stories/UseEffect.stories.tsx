import React, {useEffect} from 'react';
import {useState} from "react";

export default {
    title:'UseEffect demo'
}


// export const SimpleExample= () => {
//     const [counter, setCounter] = useState(1);
//     const [fake, setFake] = useState(1);
//     console.log("simple example");
//
//
//    useEffect(() => {
//        console.log("useEffect first time and when counter changed");
//        document.title = counter.toString();
//
//    },[counter]);
//
//     useEffect(() => {
//         console.log("useEffect first time render (componentDidMount)");
//
//
//     },[])
//     useEffect(() => {
//         console.log("useEffect every render");
//
//     })
//     return(
//         <>
//             {counter}
//             <button onClick={() => setCounter(counter + 1)}>Counter +</button>
//             {fake}
//             <button onClick={() => setFake(fake + 1)}>Fake +</button>
//         </>
//     )
//
// }

export const SetTimeoutExample= () => {

    const date = new Date();
    const hoursInit = date.getHours();
    const minutesInit = date.getMinutes();
    const secondsInit = date.getSeconds();

    const [counter, setCounter] = useState(1);
    const [timer, setTimer] = useState(1);
    const [fake, setFake] = useState(1);
    const [seconds, setSeconds] = useState(secondsInit);
    const [minutes, setMinutes] = useState(minutesInit);
    const [hours, setHours] = useState(hoursInit);


    console.log("SetTimeoutExample");


   useEffect(() => {
       setTimeout(() => {
           console.log("useEffect first time and when counter changed");
           document.title = counter.toString();
       }, 1000)
   }, [counter]);

    useEffect(() => {
        console.log("tick: " + timer)
        setInterval(() => {
            setTimer((timer) => timer + 1)

        }, 1000)
    }, []);

    if (seconds === 59) {
        setMinutes((minutes) => minutes + 1);
        setSeconds((seconds) => {
            seconds = 0
            return seconds
        })
    }
    if (minutes === 59) {
        setHours((hours) => hours + 1);
        setMinutes((minutes) => {
            minutes = 0
            return minutes
        })
    }

    useEffect(() => {
        setInterval(() =>  {
            setSeconds((seconds) => seconds + 1)
        }, 1000);

    }, []);

    return(
        <>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>Counter +</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>Fake +</button>

            {/*Hello, timer: {timer}*/}
            {/*<div>*/}
            {/*    clock: {hours}:{minutes}:{seconds}*/}
            {/*</div>*/}
        </>
    )

}

