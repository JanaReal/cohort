import { useState, useEffect, useMemo } from "react";

function App() {
  //let [id, setId] = useState(1);
  let [inputVal, setInputVal] = useState(0);
  let [counter, setCounter] = useState(0);
  let [sum,setSum] = useState(0);

  // let sum = useMemo(()=> {

  //   let finalSum = 0;
  //   for(let i = 1; i <= inputVal; i++){
  //     finalSum+=i;
  //   }
  // return finalSum;

  // },[inputVal]);

  useEffect(()=>{
    let sum = 0;
    for(let i = 0; i <= inputVal; i++ ){
      sum+=i;
    }
    setSum(sum)
  },[inputVal])

  

  return (
    <div>
      <input onChange={(e)=> setInputVal(e.target.value)}></input>
      <br/>
      Sum from 1 to {inputVal} is {sum}
      <br/>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default App;
