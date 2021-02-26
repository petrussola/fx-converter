import React, { useEffect, useState } from "react";

// components
import NavBar from "./components/NavBar";
import ErrorMessage from "./components/ErrorMessage";

// routes
import Routes from "./Routes";

// context
import { fxContext } from "./context/fx";

// helpers
import { titles, convertInputAmount, grabInitialData } from "./helpers/helpers";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

function App() {
  const [currencies, setCurrencies] = useState({});
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
  const [errorMessage, setErrorMessage] = useState("");

  const contextStore = {
    currencies,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    selectedDestinationCurrency,
    setSelectedDestinationCurrency,
    titles,
    whichCurrency,
    setWhichCurrency,
    errorMessage,
    setErrorMessage,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMessage("");
        const {
          filteredCurrencies,
          stateSelectedCurrency,
        } = await grabInitialData(selectedBaseCurrency.iso);
        // if no data is returned, set error message as there is a problem with the api
        if (!filteredCurrencies || !stateSelectedCurrency) {
          setErrorMessage("Something went wrong. Please try again later");
        } else {
          setCurrencies(filteredCurrencies);
          setSelectedBaseCurrency({
            ...selectedBaseCurrency,
            ...stateSelectedCurrency,
          });
        }
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // determine which currency is being typed and which one is being converted to
    const currencyToConvert =
      whichCurrency === "baseCurrency"
        ? selectedBaseCurrency.typed
        : selectedDestinationCurrency.typed;

    // call helper function with amount that was typed by User (currencyToConvert). return amount for base currency and destination currency
    const { base, destination } = convertInputAmount(
      currencyToConvert,
      selectedBaseCurrency.fx[selectedDestinationCurrency.iso],
      whichCurrency
    );
    // set states with new amounts
    setSelectedBaseCurrency({
      ...selectedBaseCurrency,
      typed: base,
    });
    setSelectedDestinationCurrency({
      ...selectedDestinationCurrency,
      typed: destination,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBaseCurrency.iso, selectedDestinationCurrency.iso]);

  if (!apiKey) {
    return <div>Please add Fixer's API Key</div>;
  }

  return (
    <div className="App">
      <fxContext.Provider value={contextStore}>
        <NavBar />
        <ErrorMessage />
        <Routes />
      </fxContext.Provider>
    </div>
  );
}

export default App;
