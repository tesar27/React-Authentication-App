import { useRef } from 'react';

const Playground06 = () => {
  const sound = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`color ${colorVal} sounds like ${soundVal}`);
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <form onSubmit={submit}>
     <input ref={sound} type="text" placeholder='sound...'/>
     <input ref={color} type="color" />
     <button>ADD</button>
    </form>
    
  )
}

export default Playground06;