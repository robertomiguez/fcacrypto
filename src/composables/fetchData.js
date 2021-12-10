/* const fetchCryptoCoin = async () => {
  const res = await fetch('${process.env.VUE_APP_URL}/coins/list?include_platform=false', {
    headers: {
      Accept: 'application/json'
    }
  })
  return await res.json()
} */

const fetchCryptoCoins = () => {
  return [
    { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
    { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
    { id: 'binancecoin', symbol: 'BNB', name: 'Binance Coin' },
    { id: 'cardano', symbol: 'ADA', name: 'Cardano' },
    { id: 'polkadot', symbol: 'DOT', name: 'Polkadot' }
  ]
}

/* const fetchFiat = async () => {
  const res = await fetch('${process.env.VUE_APP_URL}/simple/supported_vs_currencies', {
    headers: {
      Accept: 'application/json'
    }
  })
  return await res.json()
} */

const fetchFiatCoins = (lang) => {
  return [
    { id: 'USD', symbol: '$', name: lang === 'en' ? 'Dollar' : 'Dólar' },
    { id: 'EUR', symbol: '€', name: 'Euro' },
    { id: 'GBP', symbol: '£', name: lang === 'en' ? 'British pound' : 'Libra Esterlina' },
    { id: 'BRL', symbol: 'R$', name: lang === 'en' ? 'Brazilian Real' : 'Real' }
  ]
}

const fetchHistoricalMarket = async (cryptoCoin, fiatCoin, starting) => {
  const res = await fetch(`
    ${process.env.VUE_APP_URL}/coins/${cryptoCoin}/market_chart?vs_currency=${fiatCoin}&days=${starting}&interval=daily`, {
    headers: {
      Accept: 'application/json'
    }
  })
  return await res.json()
}

const fetchPeriodicities = (lang) => {
  return [
    { id: 1, name: lang === 'en' ? 'daily' : 'diariamente' },
    { id: 7, name: lang === 'en' ? 'weekly' : 'semanalmente' },
    { id: 14, name: lang === 'en' ? 'biweekly' : 'duas vezes por semana' },
    { id: 30, name: lang === 'en' ? 'monthly' : 'mensalmente' }
  ]
}

const fetchStartings = (lang) => {
  return [
    { id: 30, name: lang === 'en' ? 'one month ago' : 'um mês atrás' },
    { id: 183, name: lang === 'en' ? 'six months ago' : 'seis meses atrás' },
    { id: 365, name: lang === 'en' ? 'one year ago' : 'um ano atrás' },
    { id: 730, name: lang === 'en' ? 'two years ago' : 'dois anos atrás' }
  ]
}

export {
  fetchCryptoCoins,
  fetchFiatCoins,
  fetchHistoricalMarket,
  fetchPeriodicities,
  fetchStartings
}
