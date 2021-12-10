<template>
  {{ lastQuoteDate }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'LastQuoteDate',
  setup () {
    const store = useStore()
    const lastQuoteDate = computed(() => store.getters.getLastQuoteDate)
    return { lastQuoteDate }
  }

}
</script>

<style>

</style>
