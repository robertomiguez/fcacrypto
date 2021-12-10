<template>
    <form>
        <label for="purchaseAmount">{{ $t("purchasedamount") }}</label>
        <input type="number" id="purchaseAmount" v-model.number="purchaseAmount">

        <label for="cryptoCoin">{{ $t("cryptocoin") }}</label>
        <select id="cryptoCoin" v-model="cryptoCoin">
            <option v-for="cryptoCoin in cryptoCoins" :key="cryptoCoin.id" :value="cryptoCoin">
                {{cryptoCoin.name}}
            </option>
        </select>

        <label for="fiatCoin">Fiat</label>
        <select id="fiatCoin" v-model="fiatCoin">
            <option v-for="fiatCoin in fiatCoins" :key="fiatCoin.id" :value="fiatCoin">
                 {{fiatCoin.symbol}} - {{fiatCoin.name}}
            </option>
        </select>

        <label for="periodicity">{{ $t("periodicity") }}</label>
        <select id="periodicity" v-model="periodicity">
            <option v-for="periodicity in periodicities" :key="periodicity.id" :value="periodicity">
                {{periodicity.name}}
            </option>
        </select>

        <label for="starting">{{ $t("starting") }}</label>
        <select id="starting" v-model="starting">
            <option v-for="starting in startings" :key="starting.id" :value="starting">
                {{starting.name}}
            </option>
        </select>

  </form>
</template>

<script>
// @change="loadHistoricalMarket($event.target.value)"
import { onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue3-i18n'
export default {
  name: 'Settings',
  setup () {
    const store = useStore()
    const i18n = useI18n()

    onMounted(() => {
      store.dispatch('loadCryptoCoins')
      store.dispatch('loadFiatCoins', i18n.getLocale())
      store.dispatch('loadPeriodicities', i18n.getLocale())
      store.dispatch('loadStartings', i18n.getLocale())
    })

    const purchaseAmount = computed({
      get: () => store.getters.getPurchaseAmount,
      set: val => { store.commit('SET_PURCHASE_AMOUNT', val) }
    })
    const cryptoCoin = computed({
      get: () => store.getters.getCryptoCoin,
      set: val => { store.commit('SET_CRYPTO_COIN', val) }
    })
    const fiatCoin = computed({
      get: () => store.getters.getFiatCoin,
      set: val => { store.commit('SET_FIAT_COIN', val) }
    })
    const periodicity = computed({
      get: () => store.getters.getPeriodicity,
      set: val => { store.commit('SET_PERIODICITY', val) }
    })
    const starting = computed({
      get: () => store.getters.getStarting,
      set: val => { store.commit('SET_STARTING', val) }
    })
    const cryptoCoins = computed(() => store.getters.getCryptoCoins)
    const fiatCoins = computed(() => store.getters.getFiatCoins)
    const periodicities = computed(() => store.getters.getPeriodicities)
    const startings = computed(() => store.getters.getStartings)

    watch([
      purchaseAmount,
      cryptoCoin,
      fiatCoin,
      periodicity,
      starting
    ], async () => {
      await store.dispatch('loadHistoricalMarket')
      store.dispatch('fillSettings')
    })

    return {
      cryptoCoin,
      fiatCoin,
      purchaseAmount,
      periodicity,
      starting,
      cryptoCoins,
      fiatCoins,
      periodicities,
      startings
    }
  }

}
</script>

<style scoped>
label {
  font-size: 13px;
  font-weight: 500;
}
input[type=text], input[type=number], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
