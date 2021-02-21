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

const listCurrencies =
  "EUR,JPY,BGN,CZK,GBP,HUF,PLN,RON,SEK,CHF,ISK,NOK,HRK,RUB,TRY,AUD,USD";

const apiKey = process.env.REACT_APP_FIXER_API_KEY;

const endpointRate = `${process.env.REACT_APP_FIXER_BASE_URL}/latest?access_key=${apiKey}`;

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
