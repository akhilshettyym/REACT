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
        <br/>
            <h6>I am React useState in {color}</h6>
            <p>Black Color: {black}</p>
            <p>Blue Color: {blue}</p>
            <p>Purple Color: {purple}</p>

            <button type="button" class="btn btn-outline-success" onClick={changeMeBlack}>Black</button>
            <button type="button" class="btn btn-outline-success" onClick={changeMeBlue}>Blue</button>
            <button type="button" class="btn btn-outline-success" onClick={changeMePurple}>Purple</button>
        </>
    );
}

export default UseState;