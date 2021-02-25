// symbols that are accepted in the fx app. Otherwise, we have a very large list returned by the FX open API

const acceptedSymbols = {
  EUR: "€",
  JPY: "¥",
  BGN: "Лв",
  CZK: "Kč",
  GBP: "£",
  HUF: "Ft",
  PLN: "zł",
  RON: "lei",
  SEK: "kr",
  CHF: "CHF",
  ISK: "kr",
  NOK: "kr",
  HRK: "kn",
  RUB: "₽",
  TRY: "₺",
  AUD: "A$",
  USD: "$",
};

const listCurrencies =
  "EUR,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,USD";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const endpointRate = `${process.env.REACT_APP_FIXER_BASE_URL}/latest?access_key=${apiKey}`;

const endpointSymbols = `${process.env.REACT_APP_FIXER_BASE_URL}/symbols?access_key=${apiKey}`;

export const filterCurrencies = (symbols) => {
  // initialise empty object to save currencies that should be used in the app only
  const returnSymbols = {};
  // iterate through the object of currencies returned by the API
  for (const symbol in symbols) {
    // if the key (symbol of the currency) is among currencies used in our FX app
    if (symbol in acceptedSymbols) {
      // add symbol and name of currency in the object
      returnSymbols[symbol] = symbols[symbol];
    }
  }
  return returnSymbols;
};

export const convertCurrenciesIntoArray = (currencies) => {
  const symbols = [];

  for (const symbol in currencies) {
    // symbols.push(`${currencies[symbol]} (${symbol})`);
    symbols.push(symbol);
  }

  return symbols;
};

export const grabFx = async (selectedBaseCurrency) => {
  try {
    // call endpoint with built URL to fetch all fxs using selected currency base
    const res = await fetch(
      `${endpointRate}&base=${selectedBaseCurrency}&symbols=${listCurrencies}`
    );
    const data = await res.json();
    // return new state ready to be set as such
    return { iso: data.base, fx: data.rates };
  } catch (error) {
    console.error(error.message);
  }
};

export const titles = ["currency converter", "current exchange rates"];

export const convertInputAmount = (amount, fx, name) => {
  let newAmount = null;
  let destinationAmount = null;
  // prevents bug when user deletes full amount. Prevents from going NaN
  if (amount === "" || !fx) {
    newAmount = 0;
    return { base: 0, destination: 0 };
  }
  newAmount = parseInt(amount);
  if (name === "baseCurrency") {
    // convert typed amount into whatever the fx pulled from state
    destinationAmount = (newAmount * fx).toFixed(4);

    return { base: newAmount, destination: destinationAmount };
  } else {
    // reverse fx formula is 1 / fx. Therefore, we return the reverse fx amount by multiplying typed amount times (1 / fx)
    destinationAmount = (newAmount * (1 / fx)).toFixed(4);
    return { base: destinationAmount, destination: newAmount };
  }
};

export const grabInitialData = async (symbol) => {
  try {
    // fetch the currency symbols
    const res = await fetch(endpointSymbols);
    const { symbols } = await res.json();
    const filteredCurrencies = filterCurrencies(symbols);
    const stateSelectedCurrency = await grabFx(symbol);
    return { filteredCurrencies, stateSelectedCurrency };
  } catch (error) {
    console.log(error.message);
  }
};

export const returnCurrencySymbol = (state) => {
  return acceptedSymbols[state.iso];
};
