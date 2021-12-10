<template>
  {{ PeriodicityName }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'PeriodicityName',
  setup () {
    const store = useStore()
    const PeriodicityName = computed(() => store.getters.getPeriodicity.name)
    return { PeriodicityName }
  }

}
</script>

<style>
</style>
