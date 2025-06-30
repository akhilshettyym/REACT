import { useState, useEffect } from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);
    //   useEffect hook pops an alert when it renders for the first time
    useEffect(() => {
        alert("Welcome to React useState Hook Example");
    }, []);

    const changeMe = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        alert("Count was updated");
    }, [count]);
    // The above useEffect will render twice because of strict mode in React 18.

    return (
        <>
            <div>The count is {count}</div>
            {/* <button onClick={()=>{setCount(count+1)}}>Update Count</button> */}
            <button onClick={changeMe}>Update Count</button>
        </>
    );
}

export default UseEffect;