//components/App.js
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./Login";
function App() {
  //save to local storage
  //cole-chat-id	=>ID or uuid	
  const [id, setId] = useLocalStorage("id");
  return (
    <div>
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}
export default App;

