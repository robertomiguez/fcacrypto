<template>
  {{ cryptoCoinName }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'CryptoCoinName',
  setup () {
    const store = useStore()
    const cryptoCoinName = computed(() => store.getters.getCryptoCoin.name)
    return { cryptoCoinName }
  }

}
</script>

<style>

</style>
