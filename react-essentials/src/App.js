import React from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
