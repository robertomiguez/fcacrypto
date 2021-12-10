<template>
  {{ quantityCrypto }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'QuantityCrypto',
  setup () {
    const store = useStore()
    const quantityCrypto = computed(() => store.getters.getQuantityCrypto)
    return { quantityCrypto }
  }

}
</script>

<style>

</style>
