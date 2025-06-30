import { useState } from 'react';

function UseState() {
    const color = "Red";

    // useState hooks
    const [black, setBlack] = useState(color);
    const [blue, setBlue] = useState(color);
    const [purple, setPurple] = useState(color);

    const changeMeBlack = () => {
        setBlack('Black');
    };

    const changeMeBlue = () => {
        setBlue('Blue');
    };

    const changeMePurple = () => {
        setPurple('Purple');
    };

    return (
        <>
            <h1>I am React useState in {color}</h1>
            <p>Black Color: {black}</p>
            <p>Blue Color: {blue}</p>
            <p>Purple Color: {purple}</p>

            <button onClick={changeMeBlack}>Black</button>
            <button onClick={changeMeBlue}>Blue</button>
            <button onClick={changeMePurple}>Purple</button>
        </>
    );
}

export default UseState;