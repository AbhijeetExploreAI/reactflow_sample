import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NestedFlow from "./SubFlowSample";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      {/* <header className="App-header">
        <h1>Hello World</h1>
      </header> */}
      <NestedFlow />
    </div>
  );
}

export default App;
