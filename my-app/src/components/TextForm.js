import React, { useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter the text here:');

    return (
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
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
        </div>
    );
}
