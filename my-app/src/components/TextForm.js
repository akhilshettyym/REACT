import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick =() => {
        // console.log("Uppercase was clicked"  + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter the text here:');
    
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea clasName = "form-control" value = {text} onChange = {handleOnChange} id="myBox" rows = "8"></textarea>
    </div>
        <button className="btn btn-primary" onClick = {handleUpClick} >Convert to Upper case</button>
    </div>
    

  )
}
