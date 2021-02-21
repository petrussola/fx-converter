import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";

// context
import { fxContext } from "./context/fx";

// helpers
import { filterCurrencies } from "./helpers/helpers";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const endpoint = `${process.env.REACT_APP_FIXER_BASE_URL}/symbols?access_key=${apiKey}`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [defaultCurrencyBase, setDefaultCurrencyBase] = useState(
    "United States Dollar (USD)"
  );
  const [defaultCurrencyDestination, setDefaultCurrencyDestination] = useState(
    "Euro (EUR)"
  );

  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState(null);
  const [
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  ] = useState(null);

  const contextStore = {
    currencies,
    defaultCurrencyBase,
    defaultCurrencyDestination,
    setSelectedBaseCurrency,
    setSelectedDestinationCurrency,
  };

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const { symbols } = data;
        setCurrencies(filterCurrencies(symbols));
      });
  }, []);

  if (!apiKey) {
    return <div>Please add Fixer's API Key</div>;
  }

  return (
    <div className="App">
      <fxContext.Provider value={contextStore}>
        <NavBar />
        <Body />
      </fxContext.Provider>
    </div>
  );
}

export default App;
