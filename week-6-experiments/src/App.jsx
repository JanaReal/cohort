import React, { useState } from "react";

let counter = 4;

function App() {

  return(
    <div>
      <CardWrapper innerComponent={<TextComponent/>}/>

    </div>
  )

  
}

function TextComponent(){
  return(
    <div>
      Hi this is text component
    </div>
  )

}

function CardWrapper({innerComponent}){

return(
  <div style={{border: "2px solid black"}}>{innerComponent}</div>
);
}
export default App;
