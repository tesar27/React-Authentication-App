import {useInput} from '../hooks/useInput';

const Playground08 = () => {
  const [soundProps, resetSound] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${soundProps.value} has sound ${colorProps.value}`);
    resetSound();
    resetColor();
  
  }
  return (
  <form onSubmit={submit} >
    <input 
    {...soundProps}
    type="text" 
    placeholder='sound...'/>
    <input 
    {...colorProps}
    type="color" 
    />
    <button >ADD</button>
  </form >
 )
}

export default Playground08;