import React, { useState, useEffect, useReducer } from "react";
import "./App.css";


function App() {
  // const [emotion, setEmotion] = useState('Happy');
  // const [secondary, setSecondary] = useState('Tired');

  const [checked, toggle] = useReducer((checked) => !checked, false);

  // useEffect(() => {
  //   console.log(`It's ${secondary} around here!`);
  // });

  // const frustrate = () => {
  //   setEmotion('frustrated');
  // }

  // const enthuse = () => {
  //   setEmotion('Enthusiastic')
  // }

  // const happy = () => {
  //   setEmotion('Happy')
  // }

  // const secondaryCrabby = () => {
  //   setSecondary('Crabby');
  // }

  // const secondaryTired = () => {s
  //   setSecondary('Tired');
  // }

  // const secondaryPlacid = () => {
  //   setSecondary('Placid');
  // }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>
        { checked ? "checked" : "not checked" }
      </p>
    </>
  );
}

export default App;
