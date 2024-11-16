import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick =()=>{

        //console.log("Uppercase Was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClear =()=>{

        //console.log("Uppercase Was clicked" +text);
        let newText =""
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    const handleOnChange=(event)=>{
        //console.log("Handle on change");
        setText(event.target.value)
        
    }
    const [text,setText]=useState("");
    return (
        <>
        <div className='container'>
            <h1  style={{color:props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
            <div className="mb-3">   
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
            <p>{0.08 *text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
