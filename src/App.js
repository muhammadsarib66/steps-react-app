import React, { useState , useEffect} from 'react'
import Step from './component/Steps';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "the End 🤑",
  'there is ANother value😵'
];

console.log()
let guesName = 'sarib'
let no =  0  && guesName;

console.log(no)


function App() {


 const [isOpen, setIsOpen]=useState(true)
  
function tabOpen(){
  setIsOpen(!isOpen)
  
}
  return (
    <>
<div>    
  {isOpen && <Step messages={messages}/>}  
<button className='close' onClick={tabOpen}> &times; </button>
            
    </div>
    </>
  );
}

export default App;


