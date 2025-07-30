function App(){
  return <>
  <Todo title={"go to gym"} desc={"at 6pm"} done={false}/>
  </>

}

interface TodoProp {
  title : string,
  desc : string,
  done: boolean
}

function Todo(prop : TodoProp){
  return <div>
    <h1>{prop.title}</h1>
    <h2>{prop.desc}</h2>
    <h3>{prop.done}</h3>
  </div>
}

export default App;