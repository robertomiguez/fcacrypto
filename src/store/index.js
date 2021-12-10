import { createStore } from 'vuex'
import {
  fetchCryptoCoins,
  fetchFiatCoins,
  fetchHistoricalMarket,
  fetchPeriodicities,
  fetchStartings
} from '../composables/fetchData'
import moment from 'moment'

export default createStore({
  state: {
    purchaseAmount: 10,
    cryptoCoin: { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
    cryptoCoins: [],
    fiatCoin: { id: 'USD', symbol: '$', name: 'Dollar' },
    fiatCoins: [],
    periodicity: { id: 1, name: 'daily' },
    periodicities: [],
    starting: { id: 30, name: 'one month ago' },
    startings: [],
    prices: [],
    transactions: [],
    totalInvested: 0,
    profit: 0
  },
  actions: {
    loadCryptoCoins ({ commit }) {
      try {
        const cryptoCoins = fetchCryptoCoins()
        commit('SET_CRYPTO_COINS', cryptoCoins)
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on loading cryptocoins. ${error}` })
      }
    },
    loadFiatCoins ({ commit }, lang) {
      try {
        const fiatCoins = fetchFiatCoins(lang)
        commit('SET_FIAT_COINS', fiatCoins)
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on loading fiat coins. ${error}` })
      }
    },
    async loadHistoricalMarket ({ commit, state }) {
      try {
        const market = await fetchHistoricalMarket(state.cryptoCoin.id, state.fiatCoin.id, state.starting.id)
        commit('SET_PRICES', market.prices)
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on loading Historical Market prices. ${error}` })
      }
    },
    loadPeriodicities ({ commit }, lang) {
      try {
        const periodicities = fetchPeriodicities(lang)
        commit('SET_PERIODICITIES', periodicities)
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on loading Periodicities. ${error}` })
      }
    },
    loadStartings ({ commit }, lang) {
      try {
        const startings = fetchStartings(lang)
        commit('SET_STARTINGS', startings)
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on loading startings. ${error}` })
      }
    },
    fillSettings ({ commit, state }) {
      try {
        // if (state.starting) {
        //   // state.profit = 0
        //   throw new Error('Starting must be greater than.')
        // }
        let quantityCrypto = 0
        let quantityCryptoAcc = 0
        const transactions = []
        let dateFormatted

        const LastDay =
          (state.periodicity.id === 1) ? state.prices.length - state.periodicity.id - 1
            : (state.periodicity.id === 30) ? state.prices.length - 30
              : state.prices.length - state.periodicity.id - 2 // 7 and 14

        for (let i = LastDay; i >= 0; i -= state.periodicity.id) {
          quantityCrypto = state.purchaseAmount / state.prices[i][1]
          dateFormatted = moment(state.prices[i][0]).format('DD/MM/YY HH:mm')
          transactions.push({
            id: i,
            dateTime: dateFormatted,
            price: state.prices[i][1].toFixed(2),
            purchaseAcc: 0,
            quantityCrypto,
            quantityCryptoAcc
          })
        }

        transactions.sort((a, b) => (a.id > b.id) ? 1 : -1)

        // partial acc
        for (let i = 0; i <= transactions.length - 1; i++) {
          quantityCryptoAcc += transactions[i].quantityCrypto
          transactions[i].quantityCryptoAcc += quantityCryptoAcc
          transactions[i].purchaseAcc = (+quantityCryptoAcc * +transactions[i].price).toFixed(transactions[i].price < 50 ? 8 : 2)
          transactions[i].purchaseAmount = state.purchaseAmount + (i === 0 ? 0 : transactions[i - 1].purchaseAmount)
        }
        commit('SET_TRANSACTIONS', transactions)
        commit('SET_QUANTITY_CRYPTO', quantityCryptoAcc.toFixed(8))
        const totalInvested = state.purchaseAmount * Math.floor((state.starting.id) / state.periodicity.id)
        commit('SET_TOTAL_INVESTED', totalInvested)
        const profit = state.quantityCrypto * state.prices[state.prices.length - 1][1] - state.totalInvested
        commit('SET_PROFIT', profit.toFixed(2))
        const percentProfit = state.profit / state.totalInvested * 100
        commit('SET_PERCENT_PROFIT', percentProfit.toFixed(2))
        const totalValue = +state.totalInvested + +state.profit
        commit('SET_TOTAL_VALUE', totalValue.toFixed(2))
      } catch (error) {
        commit('SET_MESSAGE', { messageType: 'error', description: `Error on calculating profit. ${error}` })
      }
    }
  },
  mutations: {
    SET_PURCHASE_AMOUNT (state, purchaseAmount) {
      state.purchaseAmount = purchaseAmount
    },
    SET_CRYPTO_COIN (state, cryptoCoin) {
      state.cryptoCoin = cryptoCoin
    },
    SET_CRYPTO_COINS (state, cryptoCoins) {
      state.cryptoCoins = cryptoCoins // .filter(ticker => ticker.rank <= 10)
    },
    SET_FIAT_COIN (state, fiatCoin) {
      state.fiatCoin = fiatCoin
    },
    SET_FIAT_COINS (state, fiatCoins) {
      state.fiatCoins = fiatCoins
    },
    SET_STARTING (state, starting) {
      state.starting = starting
    },
    SET_STARTINGS (state, startings) {
      state.startings = startings
    },
    SET_PERIODICITY (state, periodicity) {
      state.periodicity = periodicity
    },
    SET_PERIODICITIES (state, periodicities) {
      state.periodicities = periodicities
    },
    SET_PRICES (state, prices) {
      state.prices = prices
    },
    SET_TRANSACTIONS (state, transactions) {
      state.transactions = transactions
    },
    SET_QUANTITY_CRYPTO (state, quantityCrypto) {
      state.quantityCrypto = quantityCrypto
    },
    SET_TOTAL_INVESTED (state, totalInvested) {
      state.totalInvested = totalInvested
    },
    SET_PROFIT (state, profit) {
      state.profit = profit
    },
    SET_PERCENT_PROFIT (state, percentProfit) {
      state.percentProfit = percentProfit
    },
    SET_TOTAL_VALUE (state, totalValue) {
      state.totalValue = totalValue
    },
    SET_MESSAGE (state, message) {
      state.message = message
    }
  },
  getters: {
    getPurchaseAmount (state) {
      return state.purchaseAmount
    },
    getCryptoCoin (state) {
      return state.cryptoCoin
    },
    getCryptoCoins (state) {
      return state.cryptoCoins
    },
    getFiatCoin (state) {
      return state.fiatCoin
    },
    getFiatCoins (state) {
      return state.fiatCoins
    },
    getPeriodicity (state) {
      return state.periodicity
    },
    getPeriodicities (state) {
      return state.periodicities
    },
    getStarting (state) {
      return state.starting
    },
    getStartings (state) {
      return state.startings
    },
    getPrices (state) {
      return state.prices
    },
    getTransactions (state) {
      return state.transactions
    },
    getQuantityCrypto (state) {
      return state.quantityCrypto
    },
    getTotalInvested (state) {
      return state.totalInvested
    },
    getProfit (state) {
      return state.profit
    },
    getPercentProfit (state) {
      return state.percentProfit
    },
    getTotalValue (state) {
      // TODO: .toFixed(2)
      return state.totalValue
    },
    getLastQuoteDate (state) {
      return moment(state.prices[state.prices.length - 1][0]).format('DD/MM/YY HH:mm')
    },
    getLastQuoteValue (state) {
      return (state.prices[state.prices.length - 1][1]).toFixed(2)
    },
    getMessage (state) {
      return state.message
    }
  },
  modules: {
  }
})
