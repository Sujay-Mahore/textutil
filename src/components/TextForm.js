import React,{useState} from 'react'




//console.log(useState("Enter"))

export default function TextFrom(props) {
  const handleUpClick = () =>{
    console.log("UpperCase Was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    if(newText.length>0)
    props.showAlert("Changed To UpperCase","success")
    else
    props.showAlert("Please Enter Some Text First" , "warning")
  }
  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value);
  }
  const handleLoClick = () =>{
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    if(newText.length>0)
    props.showAlert("Changed To LowerCase","success")
    else
    props.showAlert("Please Enter Some Text First" , "warning")


  }
  const handleClClick = () =>{
    console.log("Clear Text was clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared","success")

  }
  const [text, setText] = useState('');
  //setText("TextUpdated");

  return (
    <>
    <div className = "container" style = {{color : props.mode==='dark' ? 'white' : '#343a40'}}>
      <h1>{props.heading} </h1>

        <div className="mb-3">
        
        <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode==='dark' ? '#343a40' : 'white' , color : props.mode==='dark' ? 'white' : '#343a40' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear Text</button>
        
    </div>
    <div className = "container my-2" style = {{color : props.mode==='dark' ? 'white' : '#343a40'}}> 
    <h1>Your text summary</h1>
    <p>{text.split(" ").length } words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{ text}</p>
    </div>
    </>
  )
}
