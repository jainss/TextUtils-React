import React ,{ useState } from "react"

export default function TextArea(props) {
  // on upper case click 
  const onupclick=()=>{
    // console.log("change in to upper case");
    let newval=text.toUpperCase();
    settext(newval);
    props.showAlert("Text Change into UpperCase","success");
  }
  const onClear=()=>{
    settext("");
    props.showAlert("Text is Clear","success");
  }
  const RemoveExtra=()=>{
    let val =text.split(/[ ]+/);
    settext(val.join(" "));
    props.showAlert("Extra Space is Remove","success");
  }
  const CopyText=()=>{
    var val= document.getElementById("MyBox");
    val.select();
    navigator.clipboard.writeText(val.value);
    props.showAlert("Text Copies Successfully","success");
  }
  const onlwclick=()=>{
    let newval=text.toLowerCase();
    settext(newval);
    props.showAlert("Text Change into LowerCase","success");
  }
  // for settext 
  const onchange=(event)=>{
    // console.log("On click");
    settext(event.target.value);
  }
  const [text, settext] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <form >
        <h1>{props.heading}</h1>
          <div className="form-group">
         <textarea className="form-control"value={text} style={{backgroundColor: props.mode==='dark'?'#191d2d':'white', color: props.mode==='dark'?'white':'black'}} onChange={onchange} id="MyBox" rows="10"></textarea>
         </div>
         <button className="btn btn-primary my-4"  onClick={onupclick}>Change Into UpperCase</button>
         <button className="btn btn-primary my-4 mx-3"  onClick={onlwclick}>Change Into LowerCase</button>
         <button className="btn btn-primary my-4 mx-3"  onClick={onClear}>Clear text</button>
         <button className="btn btn-primary my-4 mx-3"  onClick={CopyText}>Copy Text</button>
         <button className="btn btn-primary my-4 mx-3"  onClick={RemoveExtra}>Remove Extra Space</button>
         <div className="container">
           <h4>The Word have {text.length} character and {text.length===0?0:text.split(" ").length} word</h4>
           <h5>{0.008*(text.length===0?0:text.split(" ").length)} Minutes to read this text</h5>
         </div>
    </form>
    </div>
    <div className="container my-4"style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter The Text to preview It"}</p>
    </div>
    </>
  )
}
