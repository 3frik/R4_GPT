import logo from './logo.svg';
import './App.css';
import AnElementTest from './components/AnElementTest';
import React from 'react';
import ReactDOM from "react-dom";

function App() {
  var[theVal,theSet]=React.useState("pizza")
  
  function theFunc(){
    console.log("clicked!")
    theSet("hamburger")
  }

  return (
    <div className="App">
      <header className="App-header">
        <AnElementTest food = {theVal}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick= {theFunc} >click</button>
      </header>
    </div>
  );
}

export default App;
