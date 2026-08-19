import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // let counter=155

  let [counter,setCounter]=useState(15)

  const addValue=()=>{
  if(counter<20){
    counter=counter+1;
    setCounter(counter);
  }
  else{
    console.log('counter value is greater than 20')
  }
  }

  const removeValue=()=>{
   
    if(counter>0){
      counter=counter-1;
       setCounter(counter);
    }
    else{
      console.log('counter is already at 0')
    }
  }

  return (
    <>
   <h1>chai aur react</h1>
   <h2>counter value:{counter}</h2>

   <button
   onClick={addValue}>Add vlaue</button>
   <br/>
   <button
   onClick={removeValue}>Remove value</button>
   footer:{counter}
   </>
  )
}

export default App
