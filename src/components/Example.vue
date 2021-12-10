<template>
  {{totalInvested}} Total Invested <br>
  <button @click="increase">Increase Investiment</button><br>
  <input type="text" v-model="totalInvested"><br><br><br><br>

  <input type="search" v-model="search"><br>
  <p>seatch coin - {{search}} </p>
  <div v-for="coin in filteredCoins" :key="coin">
    <ExampleDetail :coin="coin" v-if="show"/>
  </div>

  <br><br>

  <button @click="fiat.pop()">Delete a fiat coin</button>
  {{fiat}}

  <button @click="show = !show">Show</button> <br>

  <div v-for="coin in coins" :key="coin.id">
    {{ coin.id}}
  </div>

</template>

<script>
import { ref, computed /* , watch, watchEffect, onMounted, onUnmounted, onUpdated */ } from 'vue'
import ExampleDetail from './ExampleDetail'
import { useStore } from 'vuex'

export default {
  name: 'TotalInvested',
  components: {
    ExampleDetail
  },
  props: {
    propCoins: {
      type: Array,
      required: true
    }
  },
  // props: ['coins'],
  setup (props) {
  // setup () {
    // data
    const totalInvested = ref(1569.23)
    const search = ref('')
    const show = ref(true)
    const fiat = ref(['USD', 'EUR', 'GBP'])
    const store = useStore()

    // method
    const increase = () => {
      totalInvested.value = totalInvested.value * Math.random(3)
    }
    store.dispatch('loadCoins')

    // computed
    const filteredCoins = computed(() => props.propCoins.filter(coin => coin.includes(search.value)))
    // const coins = computed(() => store.state.coins)
    const coins = computed(() => store.getters.getCoins)

    // watch
    // watch(search, () => { // watch only search
    //   console.log('watch - search', search.value)
    //   console.log('watch - totalInvested', totalInvested.value) // if totalInvested changing nothing happen, watching only search
    // })

    // watchEffect differences: it gets the default value (The callback is called immediately)
    // whenever `search` or `totalInvested` changes it is watched, the same behavior as for `computed()`.
    // watchEffect(() => {
    //   console.log('watchEffect - search', search.value)
    //   console.log('watchEffect - totalInvested', totalInvested.value)
    // })

    // onMounted(() => console.log('Mounted'))
    // onUnmounted(() => console.log('Unmounted'))
    // onUpdated(() => console.log('Updated'))

    return { totalInvested, increase, search, filteredCoins, show, fiat, coins }
  }
}
</script>

<style>

</style>
