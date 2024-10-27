import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Project!</h1>
        <p>This is a basic React setup deployed on Netlify.</p>
        <button onClick={() => alert('Hello, world!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
