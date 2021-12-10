<template>
  {{ PurchaseAmount }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'PurchaseAmount',
  setup () {
    const store = useStore()
    const PurchaseAmount = computed(() => store.getters.getPurchaseAmount)
    return { PurchaseAmount }
  }

}
</script>

<style>

</style>
