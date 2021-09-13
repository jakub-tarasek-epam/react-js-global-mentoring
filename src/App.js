import React from "react";
import './App.css';

//Components
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import Counter from "./components/Counter/Counter";

//Inline component - without JSX
const HelloWorld = React.createElement(
  "div",
  {
    className: "grid-item"
  },
  React.createElement(
    "h3",
    null,
    "Hello world by React.createElement"
  )
)

function App() {
  return (
    <div className="App">
      <Header />
      {HelloWorld}
      <main className="App-main">
        <SearchBar />
        <Counter />
      </main>
    </div>
  );
}

export default App;
