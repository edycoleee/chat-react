//components/App.js
//App.js
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import Login from "./Login";
function App() {
  //save to local storage
  //cole-chat-id	=>ID or uuid	
  const [id, setId] = useLocalStorage("id");
  return (
 
      id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />

  );
}
export default App;

