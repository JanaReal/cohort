import { useState , useEffect} from "react";

function App(){
  let [id,setId] = useState(1);

  



  return (
    <div>
      <button onClick={()=> setId(1)}> 1 </button>
      <button onClick={()=> setId(2)}> 2 </button>
      <button onClick={()=> setId(3)}> 3 </button>
      <button onClick={()=> setId(4)}> 4 </button>
      <Todo id = {id}/>;
    </div>
  )
}

function Todo({id}){

  let [todos,setTodos] = useState(0);

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function(res){
        let json = await res.json();
        setTodos(json.todos)
      })
  },[])

  return(
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
}

export default App