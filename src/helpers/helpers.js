// symbols that are accepted in the fx app. Otherwise, we have a very large list returned by the FX open API

const acceptedSymbols = {
  EUR: true,
  JPY: true,
  BGN: true,
  CZK: true,
  GBP: true,
  HUF: true,
  PLN: true,
  RON: true,
  SEK: true,
  CHF: true,
  ISK: true,
  NOK: true,
  HRK: true,
  RUB: true,
  TRY: true,
  AUD: true,
  USD: true,
};

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
