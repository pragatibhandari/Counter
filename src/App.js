import './App.css';
import React, {useState} from 'react' ;

function App() {
  const [count, setCount] = useState(10)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }
  function incrimentCount(){
    setCount(count +1)
  }

  return (
    <div class ="App">
      <button onClick={decrementCount} class = "btnstyle"> - </button>
      <span> {count} </span>
      <button onClick={incrimentCount} class = "btnstyle"> + </button>
      
        
    </div>
  );
}

export default App;
