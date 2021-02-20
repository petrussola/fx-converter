import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";

// context
import { fxContext } from "./context/fx";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const baseUrl = `${process.env.REACT_APP_FIXER_BASE_URL}/symbols?access_key=${apiKey}`;

function App() {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        const { symbols } = data;
        setCurrencies(symbols);
      });
  }, []);

  if (!apiKey) {
    return <div>Please add Fixer's API Key</div>;
  }
  return (
    <div className="App">
      <fxContext.Provider value={{ currencies }}>
        <NavBar />
        <Body />
      </fxContext.Provider>
    </div>
  );
}

export default App;
