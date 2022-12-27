


import React,{ useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const increament = () => setCount (count + 1);
  const decreament = () => setCount (count - 1);

  return (
    <center>
      <div>
        <h1>Counter App</h1>
        <h2>Count {count}</h2> 

        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>      
    </div>
    </center>
  )
}

export default App
