import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";

// context
import { fxContext } from "./context/fx";

// helpers
import { filterCurrencies, grabFx, titles } from "./helpers/helpers";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const endpointSymbols = `${process.env.REACT_APP_FIXER_BASE_URL}/symbols?access_key=${apiKey}`;
const endpointRate = `${process.env.REACT_APP_FIXER_BASE_URL}/latest?access_key=${apiKey}`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [defaultCurrencyBase, setDefaultCurrencyBase] = useState(
    "United States Dollar (USD)"
  );
  const [defaultCurrencyDestination, setDefaultCurrencyDestination] = useState(
    "Euro (EUR)"
  );

  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState({
    iso: "USD",
    fx: {},
  });
  const [
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  ] = useState({ iso: "EUR", fx: {} });

  const contextStore = {
    currencies,
    defaultCurrencyBase,
    defaultCurrencyDestination,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
    titles,
  };

  useEffect(() => {
    const grabInitialData = async () => {
      try {
        // fetch the currency symbols
        const res = await fetch(endpointSymbols);
        const { symbols } = await res.json();
        // const { symbols } = data;
        setCurrencies(filterCurrencies(symbols));
        const stateSelectedCurrency = await grabFx(selectedBaseCurrency.iso);
        setSelectedBaseCurrency(stateSelectedCurrency);
      } catch (error) {
        console.log(error.message);
      }
    };
    grabInitialData();
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
