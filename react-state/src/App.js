import React, {useState} from "react";
import "./App.css";


function App() {
  const [emotion, setEmotion] = useState('happy');

  const frustrate = () => {
    setEmotion('frustrated');
  }

  const enthuse = () => {
    setEmotion('Enthusiastic')
  }

  const happy = () => {
    setEmotion()
  }

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={frustrate}>frustrate</button>
      <button onClick={enthuse}>enthuse</button>
    </>
  );
}

export default App;
