import { render } from "enzyme";
import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState();
  const changePara = () => {
    return setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      {para && <p id="para">{para}</p>} 
      <button id="click" onClick={changePara}>
        clickMe
      </button>
    </div>
  );
}

export default App;
