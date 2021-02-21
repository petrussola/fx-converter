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
  const returnSymbols = {};
  for (const symbol in symbols) {
    if (symbol in acceptedSymbols) {
      returnSymbols[symbol] = symbols[symbol];
    }
  }
  return returnSymbols;
};
