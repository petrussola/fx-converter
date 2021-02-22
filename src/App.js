import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/Body";

// context
import { fxContext } from "./context/fx";

// helpers
import {
  filterCurrencies,
  grabFx,
  titles,
  convertInputAmount,
} from "./helpers/helpers";

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
    typed: 0,
  });
  const [
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  ] = useState({ iso: "EUR", fx: {}, typed: 0 });

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
        setSelectedBaseCurrency({
          ...selectedBaseCurrency,
          ...stateSelectedCurrency,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    grabInitialData();
  }, []);

  useEffect(() => {
    const { destination } = convertInputAmount(
      selectedBaseCurrency.typed,
      selectedBaseCurrency.fx[selectedDestinationCurrency.iso]
    );
    setSelectedDestinationCurrency({
      ...selectedDestinationCurrency,
      typed: destination,
    });
  }, [selectedBaseCurrency.iso]);

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
