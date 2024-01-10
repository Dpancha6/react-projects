import { useState } from 'react'


function Color({currentColor}) {
  const[color, setcolor] = useState("green")
  function colorChange(e){
    // console.log(e)
    setcolor(currentColor)
    document.body.style.backgroundColor = e.target.className
  }

  return (
    <>
      <button style={{backgroundColor:'red'}} onClick={colorChange} className='red'>Red</button>
      <button style={{backgroundColor:'pink'}} onClick={colorChange} className='pink'>Pink</button>
      <button style={{backgroundColor:'blue'}} onClick={colorChange} className='blue'>Blue</button>
      <button style={{backgroundColor:'olive'}} onClick={colorChange} className='olive'>Olive</button>
      <button style={{backgroundColor:'green'}} onClick={colorChange} className='green'>Green</button>
      <button style={{backgroundColor:'White'}} onClick={colorChange} className='White'>White</button>
      <button style={{backgroundColor:'gray'}} onClick={colorChange} className='gray'>Gray</button>
      <button style={{backgroundColor:'Black', color:'white'}} onClick={colorChange} className='black'>Black</button>
      <button style={{backgroundColor:'Yellow'}} onClick={colorChange} className='Yellow'>Yellow</button>
      <button style={{backgroundColor:'royalblue'}} onClick={colorChange} className='royalblue'>Light Blue</button>
      
    
    </>
  )
}

export default Color
