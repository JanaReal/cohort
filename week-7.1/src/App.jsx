import { RecoilRoot, useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { countAtom, inputTodoDesc, inputTodos, isOddEvenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <TodoInputs/>
      </RecoilRoot>
    </div>
  );
}

function TodoInputs(){

  const [todoTitle,setTodoTitle] = useRecoilState(inputTodos); 
  const [todoDesc,setTodoDesc] = useRecoilState(inputTodoDesc); 

  return <div>
    <input type="text" value={inputValue} onChange={(e)=> setTodoTitle(e.target.value)} placeholder="Title"/>
    <br />
    <input type="text" value={intputValue} onChange={(e)=>setTodoDesc(e.target.value)} placeholder="Description" />
    <br />
    <button onClick={onclickHandler()}>Submit</button>
  </div>
}

function showTodos(){
  
}


export default App;
