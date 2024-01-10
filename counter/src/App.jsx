import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[number, setNumber] = useState(15);
  let[content, setcontent] = useState();

  function addNumber(){
    if(number<20){
      // setNumber(number+1)
      // setNumber(number+1) 
      setNumber(number+1) 
      setNumber(prevNumber => prevNumber+1)   
    }
    // if(number===19){
    //   document.body.style.backgroundColor = "green";
    //   setcontent("You have reached the Max Limit")
    // }
    // if(number===0){
    //   document.body.style.backgroundColor = "white";
    //   setcontent("")
    // }
  }

  function subNumber(){
    if (number>0){
      setNumber(number-1)
    }
    // if(number===1){
    //   document.body.style.backgroundColor = "red";
    //   setcontent("You have reached the Min Limit")
    // }
    // if(number===20){
    //   document.body.style.backgroundColor = "white";
    //   setcontent("")
    // }
  }
  return (
    <>
      <h2>Counter App</h2>
      <h4>Number is: {number}</h4>
      <button onClick={addNumber}>Add Number: {number}</button>
      <button onClick={subNumber}>Substract Number: {number}</button>
      <p>{content}</p>
    </>
  )
}

export default App
