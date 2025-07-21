import { useState , useEffect} from "react";

function App(){
  let [id,setId] = useState(1);

  function goToPage(id){
    setId(id);
  }



  return (
    <div>
      <button onClick={()=> goToPage(1)}> 1 </button>
      <button onClick={()=> goToPage(2)}> 2 </button>
      <button onClick={()=> goToPage(3)}> 3 </button>
      <button onClick={()=> goToPage(4)}> 4 </button>
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