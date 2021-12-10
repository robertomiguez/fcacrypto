<template>
  {{ totalValue }}
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TotalValue',
  setup () {
    const store = useStore()
    const totalValue = computed(() => store.getters.getTotalValue)
    return { totalValue }
  }

}
</script>

<style>

</style>
