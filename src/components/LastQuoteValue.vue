<template>
  {{ lastQuoteValue }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'LastQuoteValue',
  setup () {
    const store = useStore()
    const lastQuoteValue = computed(() => store.getters.getLastQuoteValue)
    return { lastQuoteValue }
  }

}
</script>

<style>

</style>
