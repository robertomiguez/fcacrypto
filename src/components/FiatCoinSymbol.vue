<template>
  {{ fiatCoinSymbol }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'FiatCoinSymbol',
  setup () {
    const store = useStore()
    const fiatCoinSymbol = computed(() => store.getters.getFiatCoin.symbol)
    return { fiatCoinSymbol }
  }
}
</script>

<style>

</style>
