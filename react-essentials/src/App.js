import React from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const dishes = [
  'Macaroni and Cheese',
  'Garlic Butter Salmon',
  'Steak and Potatoes',
  'Pulled Pork and Coleslaw'
]

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={ new Date().getFullYear() } />
    </div>
  );
}

export default App;
