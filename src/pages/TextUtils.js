import React, { useState } from 'react'
import Breadcrumb from '../components/Layout/Breadcrumb';
import Alert from '../components/Alert';

const TextUtils = (props) => {
  document.title = 'React | Text Utils';
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success', 'Text converted into Upper Case!');
  }

  const handleLoCase = () =>{
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert('success', 'Text converted into Lower Case!');
  }

  const handleClText = () =>{    
    setText('');
    props.showAlert('success', 'Text cleared successfully!');
  }

  const handleCoText = () => {
    navigator.clipboard.writeText(text);    
    props.showAlert('success', 'Text copied to clipboard!');
  }

  const handleReExspace = () => {
    let newText = text.split(/[  ]+/); //removed two or more space;
    setText(newText.join(" ")); // join with single space;
    props.showAlert('success', 'Extra speaces are removed!');
  }

  return (
    <>
      <Breadcrumb heading="Text Utils" breadcrumb="TextUtils"/>
      <section className="content">
        <Alert alert={props.alert}/>
        <div className='row'>
          <div className='col-md-12'>
            <div className="card">
              <div className='card-body'>
                <label htmlFor="textBox">Enter the text to analyse below</label>
                <textarea id='textBox' rows="5" value={text} className='form-control' onChange={handleOnChange}></textarea>
                <div className=" mt-2">
                  <button className="btn btn-primary my-1 mr-1" onClick={handleUpCase}>Upper Case</button>
                  <button className="btn btn-primary my-1 mx-1" onClick={handleLoCase}>Lower Case</button>
                  <button className="btn btn-primary my-1 mx-1" onClick={handleCoText}>Copy Text</button>
                  <button className="btn btn-primary my-1 mx-1" onClick={handleClText}>Clear Text</button>
                  <button className="btn btn-primary my-1 mx-1" onClick={handleReExspace}>Remove Extra Spaces</button>
                </div>                
              </div>
            </div>
            <div className="card">              
              <div className='card-body'>
                <h5><b>Your text summary</b></h5>
                <p className='text-sm'>{text.split(" ").filter((element)=>{return element.length !== 0}).length} Words, {text.length} Characters and {0.008 * text.split(" ").length} Minutes read</p>
                <h6><b>Preview</b></h6>
                <div className="border p-2">
                  {text.length > 0 ? text : 'Nothing to preview!'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TextUtils