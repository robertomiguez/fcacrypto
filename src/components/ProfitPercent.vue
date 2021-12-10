<template>
  {{ percentProfit }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Profit',
  setup () {
    const store = useStore()
    const percentProfit = computed(() => store.getters.getPercentProfit)
    return { percentProfit }
  }
}
</script>

<style>

</style>
