import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [greetingInputMessage, setGreetingInputMessage] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setGreetingInputMessage(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setGreetingMessage(greetingInputMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
