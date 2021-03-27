import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [emotion, setEmotion] = useState('Happy');
  const [secondary, setSecondary] = useState('Tired');

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  });

  const frustrate = () => {
    setEmotion('frustrated');
  }

  const enthuse = () => {
    setEmotion('Enthusiastic')
  }

  const happy = () => {
    setEmotion('Happy')
  }

  const secondaryCrabby = () => {
    setSecondary('Crabby');
  }

  const secondaryTired = () => {
    setSecondary('Tired');
  }

  const secondaryPlacid = () => {
    setSecondary('Placid');
  }

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={frustrate}>frustrate</button>
      <button onClick={enthuse}>enthuse</button>
      <button onClick={happy}>happy</button>
      <button onClick={secondaryCrabby}>crabby</button>
      <button onClick={secondaryTired}>tired</button>
      <button onClick={secondaryPlacid}>placid</button>
    </>
  );
}

export default App;
