import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("")

  // ====================== For Onchange event ==============
  const onChang = (event) =>{
    setText(event.target.value)
  }
  // ====================== For Onchange event ==============
  
  // ====================== For Upper case ==============
  const handleUpClick = ()=>{
    let newText= text.toUpperCase()
    setText(newText)
    if (text.length>0) {
      props.showAlert('Converted to UpperCase', 'success')
    }else{
      props.showAlert('Please type something in the given box to convert it.', 'warning')
    }
  }
  // ====================== For Upper case ==============
  // ====================== For lower case ==============
  const handleLowClick = ()=>{
    let newText= text.toLowerCase()
    setText(newText)
    if (text.length>0) {
      props.showAlert('Converted to LowerCase', 'success')
    }else{
      props.showAlert('Please type something in the given box to convert it.', 'warning')
    }
  }
  
  // ====================== For lower case ==============
  // ====================== For clear ==============
  const handleClearClick = ()=>{
    let confirmation = window.confirm('Do you really want to remove everything')
    if(confirmation === true) {
      let newText= ''
      setText(newText)
    }
  }
  // ====================== For clear ==============
  // ====================== For Inverse ==============
  const handleInverseClick = ()=>{
    let newText= text.split('')
    newText = newText.reverse().join('')
    setText(newText)
  }
  // ====================== For Inverse ==============
  // ====================== For Inverse Words==============
  const handleInverseWClick = ()=>{
    let newText= text.split(' ')
    newText = newText.reverse().join(' ')
    setText(newText)
  }
  // ====================== For Inverse ==============
  
  // ====================== For words count ==============
  let count = text.split(" ");
  let Rcount;
  if (count.includes('')) {
    Rcount = count.length -1
  }
  else{
    Rcount = count.length 
  }
  // ====================== For words count ==============
 
  return (
    <>
    <div className='container' style={{color: props.mode ==='light'?  'black':'white'}}>
      <div className="mb-3">
        <h1 className='my-3'>{props.heading}</h1>
        <textarea style={{color: props.mode ==='light'?  'black':'white', backgroundColor: props.mode ==='light'?  'white':'#727272'}} className="form-control" placeholder='Enter text here...' value={text} onChange={onChang} id="myBox" rows="8"></textarea>
        <button onClick={handleUpClick} className={`btn btn-${props.btnMode} my-3`}>Convert to upperCase</button>
        <button onClick={handleLowClick} className={`btn btn-${props.btnMode} m-1`}>Convert to LowerCase</button>
        <button onClick={handleInverseClick} className={`btn btn-${props.btnMode}`}>Inverse C</button>
        <button onClick={handleInverseWClick} className={`btn btn-${props.btnMode} m-1`}>Inverse W</button>
        <button onClick={handleClearClick} className={`btn btn-${props.btnMode}`}>Clear All</button>
      </div>
    </div>
    <div className='container my-4' style={{color: props.mode ==='light'?  'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{Rcount} WORDS and {text.length} CHARACTERS</p>
      <p>{Rcount * 0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: 'Enter some text in the above box to preview here.'}</p>
    </div>
    </>
  )
}
