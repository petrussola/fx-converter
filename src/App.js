import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/Body";

// context
import { fxContext } from "./context/fx";

// helpers
import {
  titles,
  convertInputAmount,
  grabInitialData,
} from "./helpers/helpers";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

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

  const [whichCurrency, setWhichCurrency] = useState("baseCurrency");

  const contextStore = {
    currencies,
    defaultCurrencyBase,
    defaultCurrencyDestination,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
    titles,
    whichCurrency,
    setWhichCurrency,
  };

  useEffect(() => {
    const fetchData = async () => {
      const {
        filteredCurrencies,
        stateSelectedCurrency,
      } = await grabInitialData(selectedBaseCurrency.iso);
      setCurrencies(filteredCurrencies);
      setSelectedBaseCurrency({
        ...selectedBaseCurrency,
        ...stateSelectedCurrency,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { base, destination } = convertInputAmount(
      selectedBaseCurrency.typed,
      selectedBaseCurrency.fx[selectedDestinationCurrency.iso],
      whichCurrency
    );
    setSelectedBaseCurrency({
      ...selectedBaseCurrency,
      typed: base,
    });
    setSelectedDestinationCurrency({
      ...selectedDestinationCurrency,
      typed: destination,
    });
  }, [selectedBaseCurrency.iso, selectedDestinationCurrency.iso]);

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
