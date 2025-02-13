import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleClearClick = () => {
        setText("");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleFindReplace = () => {
        let newText = text.replace(new RegExp(findWord, "gi"), replaceWord);
        setText(newText);
    };

    const [text, setText] = useState('');
    const [findWord, setFindWord] = useState('');
    const [replaceWord, setReplaceWord] = useState('');

    return (
        <>
        <div className="container d-flex flex-column align-items-center mt-4">
            <h1 className="text-center">{props.heading}</h1>
            <div className="mb-3 w-75">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    id="myBox" 
                    rows="8"
                ></textarea>
            </div>
            
            {/* Buttons Container (Side by Side) */}
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Uppercase
                </button>

                <button className="btn btn-primary" onClick={handleLoClick}>
                    Lowercase
                </button>

                <button className="btn btn-danger" onClick={handleClearClick}>
                    Clear
                </button>
            </div>

            {/* Find & Replace Section */}
            <div className="mt-4 w-75">
                <h3>Find & Replace</h3>
                <div className="d-flex gap-2">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Find..." 
                        value={findWord} 
                        onChange={(e) => setFindWord(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Replace with..." 
                        value={replaceWord} 
                        onChange={(e) => setReplaceWord(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleFindReplace}>
                        Replace
                    </button>
                </div>
            </div>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008  * (text.split(" ").length)} Minute is required to finish reading.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    );
}
