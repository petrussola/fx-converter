import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import Body from "./components/body/Body";

// context
import { fxContext } from "./context/fx";

// helpers
import { filterCurrencies } from "./helpers/helpers";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const endpointSymbols = `${process.env.REACT_APP_FIXER_BASE_URL}/symbols?access_key=${apiKey}`;
const endpointRate = `${process.env.REACT_APP_FIXER_BASE_URL}/2013-12-24?access_key=${apiKey}`;

const listCurrencies =
  "EUR,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [defaultCurrencyBase, setDefaultCurrencyBase] = useState(
    "United States Dollar (USD)"
  );
  const [defaultCurrencyDestination, setDefaultCurrencyDestination] = useState(
    "Euro (EUR)"
  );

  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState("USD");
  const [
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  ] = useState("EUR");

  const contextStore = {
    currencies,
    defaultCurrencyBase,
    defaultCurrencyDestination,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
  };

  useEffect(() => {
    fetch(endpointSymbols)
      .then((res) => res.json())
      .then((data) => {
        const { symbols } = data;
        setCurrencies(filterCurrencies(symbols));
      });
  }, []);

  useEffect(() => {
    fetch(
      `${endpointRate}&base=${selectedBaseCurrency}&symbols=${listCurrencies}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [selectedBaseCurrency]);

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
