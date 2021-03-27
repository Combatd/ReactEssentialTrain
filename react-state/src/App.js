import React, { useState, useEffect, useReducer } from "react";
import "./App.css";


// https://api.github.com/users/combatd

// props is destructured here
function App({ login }) {
  // const [emotion, setEmotion] = useState('Happy');
  // const [secondary, setSecondary] = useState('Tired');

  // const [checked, toggle] = useReducer((checked) => !checked, false);

  const [data, setData] = useState(null);

  useEffect( () => {
    fetch('https://api.github.com/users/' + login)
    .then( (res) => res.json())
    .then(setData)
  }, []);

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

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }

  return (
    <div>
      No User Available
    </div>
  );
}

export default App;
