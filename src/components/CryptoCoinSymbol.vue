<template>
  {{ cryptoCoinSymbol }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'CryptoCoinSymbol',
  setup () {
    const store = useStore()
    const cryptoCoinSymbol = computed(() => store.getters.getCryptoCoin.symbol)
    return { cryptoCoinSymbol }
  }

}
</script>

<style>

</style>
