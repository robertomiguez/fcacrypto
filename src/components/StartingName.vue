<template>
  {{ startingName }}
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Starting',
  setup () {
    const store = useStore()
    const startingName = computed(() => store.getters.getStarting.name)
    return { startingName }
  }
}
</script>

<style>
</style>
