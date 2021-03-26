import React from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" />
      <Footer year={ new Date().getFullYear() } />
    </div>
  );
}

export default App;
