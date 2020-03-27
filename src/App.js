import React from "react";
import "./styles.css";
//import Greet from "./components/Greet.js";
//import Welcome from "./components/Welcome.js";
//import Message from "./components/message.js";
//import Counter from "./components/counter.js";
import Greet from "./components/heronames.js";
import Heronames from "./components/Heronames.js";

export default function App() {
  return (
    <div className="App">
      <Greet name="BruceWyne" heronames="Batman" />
      <Heronames name="Bruce" heronames="Hulk" />
    </div>
  );
}
