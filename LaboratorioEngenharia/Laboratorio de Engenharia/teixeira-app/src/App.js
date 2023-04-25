import logo from './logo.svg';
import './App.css';
import {Contador}  from './Contador';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello teacher Ana ❤️
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Z6cONvRUFZQ&pp=ygUbYXRyYWlkb3MgcGVsYSB0dWEgcHJlc2Vuw6dh"
          target="_blank"
          rel="noopener noreferrer"
        >
         Click here!
        </a>
      </header>
    </div>
    <Contador />
    </>
  );
}

export default App;