<template>
  {{ totalInvested }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TotalInvested',
  setup () {
    const store = useStore()
    const totalInvested = computed(() => store.getters.getTotalInvested)
    return { totalInvested }
  }
}
</script>

<style>

</style>
