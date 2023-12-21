import { useState } from "react";
import "./App.css";

function App() {
  const [inputGreetingMsg, setInputGreetingMsg] = useState("");
  const [greetingMsg, setGreetingMsg] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greetingMsg}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setInputGreetingMsg(event.target.value)}
        />
      </div>

      <div
        className="buttons"
        onClick={() => {
          setGreetingMsg(inputGreetingMsg);
        }}
      >
        <button>Update text</button>
      </div>
    </div>
  );
}

export default App;
