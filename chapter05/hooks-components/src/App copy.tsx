import React from 'react';
import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <Greeting name="Luis" />
      </header>
    </div>
  );
}

export default App;
