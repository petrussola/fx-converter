import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";

// context
import { fxContext } from "./context/fx";

const baseUrl = `http://data.fixer.io/api/symbols?access_key=2127905ee66f0256ea24839dafc730f8`;

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
