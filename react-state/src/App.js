import React, { useState, useEffect, useReducer } from "react";
import "./App.css";


// https://api.github.com/users/combatd

// props is destructured here
function App({ login }) {
  // const [emotion, setEmotion] = useState('Happy');
  // const [secondary, setSecondary] = useState('Tired');

  // const [checked, toggle] = useReducer((checked) => !checked, false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {
    if (!login) {
      return;
    }
    setLoading(true);

    fetch('https://api.github.com/users/' + login)
    .then( (res) => res.json())
    .then(setData)
    .then( () => setLoading(false))
    .catch(setError);
  }, [login]);

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

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    <pre>
      {JSON.stringify(error, null, 2)}
    </pre>
  }

  if(!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.location}</h2>
      <img alt={data.login} src={data.avatar_url} />
    </div>
    );

}

export default App;
