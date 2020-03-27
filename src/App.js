import React from "react";
import "./styles.css";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Message from "./components/counter.js";

export default function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Message />
    </div>
  );
}
