<template>
  {{ profit }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Profit',
  setup () {
    const store = useStore()
    const profit = computed(() => store.getters.getProfit)
    return { profit }
  }
}
</script>

<style>

</style>
