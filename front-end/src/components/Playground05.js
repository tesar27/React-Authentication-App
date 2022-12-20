import { useReducer } from "react";

const initialState  = {
    message: "Hi!"
}
function reducer(state, action) {
  switch(action.type){
    case "yell":
        return {
          message: `HEY! I just said ${state.message}`
        };
    case "whisper":
        return {
            message: `Excuse me! I just said ${state.message}`
          }
    }
}


const Playground05 = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )
    
    return (
        <div className="fixed text-1xl">
        <p>{state.message} </p>
        <button onClick={() => dispatch({type: "yell"})}>Yell</button>
        <button onClick={() => dispatch({type: "whisper"})}>Whisper</button>
        </div>
    )
}

export default Playground05;