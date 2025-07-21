import React, { useState } from "react";

let counter = 4;

function App() {
  return (
    <div>
      <CardWrapper>
        <CardWrapper>hi there,this is 1st children of cardwrapper</CardWrapper>
        <CardWrapper>hi there,this is 2nd children of cardwrapper</CardWrapper>
        <CardWrapper>hi there,this is 3rd children of cardwrapper</CardWrapper>
        <CardWrapper>hi there,this is 4th children of cardwrapper</CardWrapper>
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
}
export default App;
