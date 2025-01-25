import React,{useState} from 'react'

export default function Forms(props) {
    const handleupclick=()=>{
          // console.log('clicked');
          let upcse=text.toUpperCase();
          settext(upcse)
    }

    const handleloclick=()=>{
      // console.log('clicked');
      let locse=text.toLowerCase();
      settext(locse)
    } 

      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
      const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
          newtext += text[i];
        }
        settext(newtext);
      };

    const handleonchange=(event)=>{
          settext(event.target.value)
    }

    const [text, settext] = useState("");
    
  return (
    <>
    <div>
     <div className='container' style={{Color:props.mode==='dark'?'white':'black'}} >
        <h3>{props.heading }</h3>
        <label htmlFor="my box" class="form-label" >Example textarea</label>
        <textarea className="form-control" id="my_box" value={text} onChange={handleonchange} style={{bcakgroundColor:props.mode==='dark'?'grey':'white'}} rows="6"></textarea>
        <button className='btn btn-success my-2 mx-1' onClick={handleupclick}>convert to upper case</button>
        <button className='btn btn-success my-2 mx-1' onClick={handleloclick}>convert to lower case</button>
        <button className='btn btn-success my-2 mx-1' onClick={speak}>read</button>
        <button className='btn btn-success my-2 mx-1' onClick={handleinverseclick }>go reverse</button>
        
     </div>
    </div>
    <div className='container '>
      <h3>Your text summary</h3>
      <p>{text.length} chracters and{text.split(" ").length} words</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  )
}

