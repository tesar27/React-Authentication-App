import { useState } from 'react'

const Playground07 = () => {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${color} has sound ${sound}`);
    setSound("");
    setColor("#000000");
  
  }
  return (
  <form onSubmit={submit} >
    <input value={sound} type="text" 
    onChange={(e)=>setSound(e.target.value)}
    placeholder='sound...'/>
    <input value={color} type="color" 
    onChange={(e)=>setColor(e.target.value)}
    />
    <button >ADD</button>
  </form >
 )
}

export default Playground07;